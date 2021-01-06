import Rainbow from 'rainbowvis.js';

function hexToRgb(hexColor) {
  /* hexColor to rgb */
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    '#' + hexColor
  );
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: 0,
        g: 0,
        b: 0,
      };
}

/**
 *
 * Gets an array of colours that smoothly transitions from [color1,...,colorN]
 * @param {array} spectrumColor
 *
 */
export default function getRgbColorsArray(spectrumColor) {
  const rainbow = new Rainbow();
  const numberOfItems = 101;
  rainbow.setNumberRange(1, numberOfItems);
  rainbow.setSpectrum(...spectrumColor); // sets spectrum from given array of colors

  // copy all colors into an array
  const rgbColorsArray = [];
  for (let i = 1; i <= numberOfItems; i++) {
    const hexColour = rainbow.colourAt(i);
    rgbColorsArray.push(hexToRgb(hexColour));
  }

  return rgbColorsArray;
}
