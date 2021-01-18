import Geocoder from 'ol-geocoder';

export default function addSearchControl(map) {
  var geocoder = new Geocoder('nominatim', {
    provider: 'osm',
    lang: 'en-US',
    placeholder: 'Search for ...',
    limit: 5,
    debug: false,
    autoComplete: true,
    keepOpen: false,
  });

  map.addControl(geocoder);

  let searchBar = document.querySelector('#gcd-input-query');
  let results = document.querySelector('#gcd-container > ul');
  results.classList.add('hide-results');

  searchBar.addEventListener('input', e => {
    if (e.target.value === '') {
      results.classList.add('hide-results');
    } else {
      results.classList.remove('hide-results');
    }
  });
}
