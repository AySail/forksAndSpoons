// forksAndSpoons.js

// --- Fraction Utilities ---
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function simplifyFraction({ numerator, denominator }) {
  const divisor = gcd(numerator, denominator);
  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor,
  };
}

export function addFractions(frac1, frac2) {
  const numerator = frac1.numerator * frac2.denominator + frac2.numerator * frac1.denominator;
  const denominator = frac1.denominator * frac2.denominator;
  return simplifyFraction({ numerator, denominator });
}

export function subtractFractions(frac1, frac2) {
  const numerator = frac1.numerator * frac2.denominator - frac2.numerator * frac1.denominator;
  const denominator = frac1.denominator * frac2.denominator;
  return simplifyFraction({ numerator, denominator });
}

export function multiplyFractions(frac1, frac2) {
  const numerator = frac1.numerator * frac2.numerator;
  const denominator = frac1.denominator * frac2.denominator;
  return simplifyFraction({ numerator, denominator });
}

export function divideFractions(frac1, frac2) {
  const numerator = frac1.numerator * frac2.denominator;
  const denominator = frac1.denominator * frac2.numerator;
  return simplifyFraction({ numerator, denominator });
}

// --- Temperature Conversion Utilities ---

// Conversion helpers (all convert input temperature to Celsius first)
function toCelsius(value, scale) {
  switch (scale.toLowerCase()) {
    case 'c': return value;
    case 'f': return (value - 32) * 5 / 9;
    case 'k': return value - 273.15;
    case 'r': return (value - 491.67) * 5 / 9;
    case 're': return value * 5 / 4;
    case 'de': return 100 - value * 2 / 3;
    case 'ro': return (value - 7.5) * 40 / 21;
    case 'n': return value * 100 / 33;
    case 'gm': return gasMarkToCelsius(value);
    default: throw new Error('Unknown temperature scale');
  }
}

function fromCelsius(value, scale) {
  switch (scale.toLowerCase()) {
    case 'c': return value;
    case 'f': return value * 9 / 5 + 32;
    case 'k': return value + 273.15;
    case 'r': return (value + 273.15) * 9 / 5;
    case 're': return value * 4 / 5;
    case 'de': return (100 - value) * 3 / 2;
    case 'ro': return value * 21 / 40 + 7.5;
    case 'n': return value * 33 / 100;
    case 'gm': return celsiusToGasMark(value);
    default: throw new Error('Unknown temperature scale');
  }
}

// Gas Mark conversions (approximated)
function gasMarkToCelsius(gm) {
  // Gas Mark to Celsius (approximate scale)
  if (gm === 0) return 135;
  if (gm === 0.5) return 140;
  if (gm === 1) return 150;
  return  (gm * 14) + 121; // rough linear approx for Gas Mark 2+
}

function celsiusToGasMark(c) {
  if (c <= 135) return 0;
  if (c <= 140) return 0.5;
  if (c <= 150) return 1;
  return Math.round((c - 121) / 14);
}

/**
 * Converts temperature value from one scale to another.
 * @param {number} value - The temperature value to convert.
 * @param {string} fromScale - The scale of the input temperature ('C', 'F', 'K', etc.).
 * @param {string} toScale - The scale to convert to.
 * @returns {number} - Converted temperature value.
 */
export function convertTemperature(value, fromScale, toScale) {
  const celsius = toCelsius(value, fromScale);
  return fromCelsius(celsius, toScale);
}
