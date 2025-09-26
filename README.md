

# Forks & Spoons (FAS)

**FAS** is a versatile JavaScript utility library offering advanced math operations and comprehensive temperature conversions. Whether you need to handle fractions, factorials, prime checks, or convert temperatures between a wide range of scales, Forks & Spoons has you covered.

---

## Features

- **Math Utilities:**
  - Fraction operations (add, subtract, multiply, divide)
  - Factorial calculations
  - Prime number checks
  - Advanced math helpers

- **Temperature Conversions:**
  Supports conversions between:
  - Celsius (°C)
  - Fahrenheit (°F)
  - Kelvin (K)
  - Rankine (R)
  - Réaumur (Re)
  - Delisle (De)
  - Rømer (Ro)
  - Newton (N)
  - Gas Mark (GM)

---

## Installation

Install via npm:

```bash
git clone https://github.com/AySail/forksAndSpoons.git
````

Or download the `fas.js` file directly and include it in your project.(via github download)

---

## Usage

### Importing

```js
import { addFractions, convertTemperature } from 'fas.js';
```

### Fraction Operations

```js
const frac1 = { numerator: 1, denominator: 2 };
const frac2 = { numerator: 3, denominator: 4 };

const sum = addFractions(frac1, frac2);
console.log(sum); // { numerator: 5, denominator: 4 }
```

### Temperature Conversion

```js
const tempF = convertTemperature(100, 'C', 'F');
console.log(tempF); // 212
```

---

## API

### Fraction Functions

* `addFractions(frac1, frac2)`
* `subtractFractions(frac1, frac2)`
* `multiplyFractions(frac1, frac2)`
* `divideFractions(frac1, frac2)`

Each function expects two fraction objects of the form:

```js
{ numerator: number, denominator: number }
```

and returns a simplified fraction object.

---

### Temperature Conversion

* `convertTemperature(value, fromScale, toScale)`

Scales supported (case-insensitive):

| Scale | Description |
| ----- | ----------- |
| `C`   | Celsius     |
| `F`   | Fahrenheit  |
| `K`   | Kelvin      |
| `R`   | Rankine     |
| `Re`  | Réaumur     |
| `De`  | Delisle     |
| `Ro`  | Rømer       |
| `N`   | Newton      |
| `GM`  | Gas Mark    |

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or issue on GitHub.

---

## License

This project is licensed under the MIT License.

---

## Contact

Made with ❤️ by [Jer](https://github.com/Aysail)


