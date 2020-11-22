function hexToRgbA(hex, opacity) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return {
      r: (c >> 16) & 255,
      g: (c >> 8) & 255,
      b: c & 255,
      a: 255 * parseFloat(opacity),
    };
  }
  throw new Error('Bad Hex');
}

export default function copyColor(colorsArray, opacity) {
  if (!colorsArray.length) return null;
  let tempColorsArray = [];
  colorsArray.map(color => tempColorsArray.push(hexToRgbA(color, opacity)));
  return tempColorsArray;
}
