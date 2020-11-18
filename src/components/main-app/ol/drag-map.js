export default function dragMap(map) {
  map.getViewport().style.cursor = '-webkit-grab';
  map.on('pointerdrag', function (evt) {
    map.getViewport().style.cursor = '-webkit-grabbing';
  });

  map.on('pointerup', function (evt) {
    map.getViewport().style.cursor = '-webkit-grab';
  });
}
