/**
 *
 * @class ColorValidator
 * @description Validates whether a given rgba color is valid.
 *
 */

import { RGB_MAX, RGB_MIN, ALPHA_MAX, ALPHA_MIN } from '../config';

class ColorValidator {
  constructor() {
    this.getRangeError = this.getRangeError.bind(this);
    this.validateRgb = this.validateRgb.bind(this);
    this.validateAlpha = this.validateAlpha.bind(this);
  }

  getRangeError(propName, componentName, min, max) {
    return new Error(
      `Prop color.'${propName}' must be a number between ${min} and ${max} on ${componentName}`
    );
  }

  validateRgb(props, propName, componentName) {
    const colorValue = props[propName];
    if (
      typeof colorValue !== 'number' ||
      colorValue > RGB_MAX ||
      colorValue < RGB_MIN
    ) {
      const rangeError = this.getRangeError(
        propName,
        componentName,
        RGB_MIN,
        RGB_MAX
      );
      return rangeError;
    }
  }

  validateAlpha(props, propName, componentName) {
    const alphaValue = props[propName];
    if (
      typeof colorValue !== 'number' ||
      alphaValue > ALPHA_MAX ||
      alphaValue < ALPHA_MIN
    ) {
      const rangeError = this.getRangeError(
        propName,
        componentName,
        ALPHA_MIN,
        ALPHA_MAX
      );
      return rangeError;
    }
  }
}

const colorValidator = new ColorValidator();

export default colorValidator;
