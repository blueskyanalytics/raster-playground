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

function rgbaToHsla(hex, opacity) {
  let rgba = hexToRgbA(hex, opacity)
  let r = rgba.r, g = rgba.g, b = rgba.b, a = rgba.a;

  r /= 255
  g /= 255
  b /= 255

  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
  
  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);
    
  // Make negative hues positive behind 360°
  if (h < 0)
      h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    h, s, l, a
  };
}

export default function copyColor(colorsArray, opacity, text) {
  if (!colorsArray.length) return null;
  
  let tempColorsArray = [];
  
  if (text === 'hex') colorsArray.map(color => tempColorsArray.push(color));
  else if (text === 'rgba') colorsArray.map(color => tempColorsArray.push(hexToRgbA(color, opacity)));
  else if (text === 'hsla') colorsArray.map(color => tempColorsArray.push(rgbaToHsla(color, opacity)));
  
  return tempColorsArray;
}
