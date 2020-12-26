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
      a: parseFloat(opacity),
    };
  }
  throw new Error('Bad Hex');
}

function hexToHsla(hex, opacity) {
  let rgba = hexToRgbA(hex, opacity);
  let r = rgba.r,
    g = rgba.g,
    b = rgba.b;

  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    h,
    s,
    l,
    a: rgba.a,
  };
}

export default function copyColor(colorsArray, opacity, type) {
  if (!colorsArray.length) return null;
  let tempColorsArray = [];
  if (type === 'rgba')
    colorsArray.map(color => tempColorsArray.push(hexToRgbA(color, opacity)));
  else if (type === 'hex')
    colorsArray.map(color => tempColorsArray.push(color));
  else if (type === 'hsla')
    colorsArray.map(color => tempColorsArray.push(hexToHsla(color, opacity)));
  return tempColorsArray;
}
