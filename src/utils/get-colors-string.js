export default function getColorsString(colorsArray) {
  let tempColorsArray = colorsArray;
  if (!tempColorsArray.length) return undefined;
  tempColorsArray = tempColorsArray.map(color => color.replace('#', ''));
  return tempColorsArray.join().replace(/,/g, '-');
}
