import { dragMap, initMap } from './';

let map = null;

export default function olMain() {
  if (map) return map;
  map = initMap();
  dragMap(map);
  return map;
}
