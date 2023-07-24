import Geocoder from 'ol-geocoder';

export default function addSearchControl(map) {
  var geocoder = new Geocoder('nominatim', {
    provider: 'osm',
    lang: 'en-US',
    placeholder: 'Search',
    limit: 10,
    debug: false,
    autoComplete: true,
    keepOpen: false,
  });

  map.addControl(geocoder);

  let searchBar = document.querySelector('#gcd-input-query.gcd-gl-input');
  let results = document.querySelector('#gcd-container > ul');
  results.classList.add('hide-results');

  searchBar.addEventListener('input', e => {
    if (e.target.value === '') {
      results.classList.add('hide-results');
      searchBar.setAttribute('style', 'opacity: 0.6;');
    } else {
      results.classList.remove('hide-results');
      searchBar.setAttribute('style', 'opacity: 1;');
    }
  });

  geocoder.on('addresschosen', () => {
    searchBar.setAttribute('style', 'opacity: 0.6;');
    results.classList.add('hide-results');
  });
}
