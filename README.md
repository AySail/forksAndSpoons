

# Forks & Spoons (FAS)

**Forks & Spoons (FAS)** is a lightweight JavaScript utility library for converting temperatures between multiple scales and accurately converting pet ages (dogs, cats, and horses) to human years and vice versa.

---

## Features

* **Temperature conversions** between 10+ scales:

  * Celsius, Fahrenheit, Kelvin, Rankine, Réaumur, Rømer, Delisle, Newton, Gas mark, Danish scale
* **Pet age conversions** for:

  * Dogs (small, medium, large breeds with realistic year mappings)
  * Cats
  * Horses

---

## Installation

(Not Supported Right Now) ```
npm install forks-and-spoons```


Or use via `<script>` tag (coming soon).
We recommd downloading the .js

---

## Usage

```js
import FAS from 'forks-and-spoons';

// Temperature conversion
const fahrenheit = FAS.temperature.convert(100, 'Celsius', 'Fahrenheit');
console.log(fahrenheit); // 212

// Dog age to human years
const humanYearsSmallDog = FAS.petAge.dogToHuman(3, 'small');
console.log(humanYearsSmallDog); // 32

// Cat age to human years
const humanYearsCat = FAS.petAge.catToHuman(6);
console.log(humanYearsCat); // 40

// Horse age to human years
const humanYearsHorse = FAS.petAge.horseToHuman(7);
console.log(humanYearsHorse); // 21
```

---

## API

### Temperature

`FAS.temperature.convert(value, fromScale, toScale)`

* `value` — Number: temperature value to convert
* `fromScale` — String: one of `celsius`, `fahrenheit`, `kelvin`, `rankine`, `reaumur`, `romer`, `delisle`, `newton`, `gasmark`, `danish`
* `toScale` — String: target scale (same options as `fromScale`)

Returns: converted temperature as a number rounded to 2 decimals.

---

### Pet Age

#### Dogs

* `FAS.petAge.dogToHuman(dogYears, size)`
* `FAS.petAge.humanToDog(humanYears, size)`

`size` options: `'small'`, `'medium'`, `'large'`

#### Cats

* `FAS.petAge.catToHuman(catYears)`
* `FAS.petAge.humanToCat(humanYears)`

#### Horses

* `FAS.petAge.horseToHuman(horseYears)`
* `FAS.petAge.humanToHorse(humanYears)`

---

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

---

## License

MIT © 2025 Aysail

---

