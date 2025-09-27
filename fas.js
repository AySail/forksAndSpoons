// Forks & Spoons (FAS) Library

const FAS = {
  version: "1.0.0",

  // Temperature conversion constants & formulas
  temperature: {
    // Convert temperature from one scale to another
    // Supported scales:
    // Celsius, Fahrenheit, Kelvin, Rankine, Reaumur, Romer, Delisle, Newton, GasMark, Danish
    convert(value, from, to) {
      const scales = ['celsius', 'fahrenheit', 'kelvin', 'rankine', 'reaumur', 'romer', 'delisle', 'newton', 'gasmark', 'danish'];
      from = from.toLowerCase();
      to = to.toLowerCase();

      if (!scales.includes(from)) throw new Error(`Unsupported from-scale: ${from}`);
      if (!scales.includes(to)) throw new Error(`Unsupported to-scale: ${to}`);

      // First convert input value to Celsius as an intermediate step
      let celsius;

      switch (from) {
        case 'celsius': celsius = value; break;
        case 'fahrenheit': celsius = (value - 32) * 5 / 9; break;
        case 'kelvin': celsius = value - 273.15; break;
        case 'rankine': celsius = (value - 491.67) * 5 / 9; break;
        case 'reaumur': celsius = value * 5 / 4; break;
        case 'romer': celsius = (value - 7.5) * 40 / 21; break;
        case 'delisle': celsius = 100 - value * 2 / 3; break;
        case 'newton': celsius = value * 100 / 33; break;
        case 'gasmark':
          // Gas mark to celsius approximation: gas mark * 14 + 121, except for 0.25 (125C), 0.5 (135C)
          if (value === 0.25) celsius = 125;
          else if (value === 0.5) celsius = 135;
          else celsius = value * 14 + 121;
          break;
        case 'danish':
          // Danish scale (based on boiling point of water = 0, freezing point = 100)
          // Approximate: celsius = 100 - value * (100 / 60)
          // Since Danish scale goes 0 (boiling) to 60 (freezing), convert inversely:
          celsius = 100 - (value * (100 / 60));
          break;
        default:
          throw new Error('Unsupported from scale');
      }

      // Then convert Celsius to the target scale
      let result;
      switch (to) {
        case 'celsius': result = celsius; break;
        case 'fahrenheit': result = (celsius * 9 / 5) + 32; break;
        case 'kelvin': result = celsius + 273.15; break;
        case 'rankine': result = (celsius + 273.15) * 9 / 5; break;
        case 'reaumur': result = celsius * 4 / 5; break;
        case 'romer': result = celsius * 21 / 40 + 7.5; break;
        case 'delisle': result = (100 - celsius) * 3 / 2; break;
        case 'newton': result = celsius * 33 / 100; break;
        case 'gasmark':
          // Reverse of above
          if (celsius === 125) result = 0.25;
          else if (celsius === 135) result = 0.5;
          else result = (celsius - 121) / 14;
          break;
        case 'danish':
          // Reverse of above
          result = (100 - celsius) * 60 / 100;
          break;
        default:
          throw new Error('Unsupported to scale');
      }

      return parseFloat(result.toFixed(2));
    }
  },

  petAge: {
    // Dog sizes and their conversion rules
    dog: {
      small: { year1: 15, year2: 24, after: 4 },
      medium: { year1: 15, year2: 24, after: 5 },
      large: { year1: 15, year2: 24, after: 6.5 } // avg of 6-7
    },

    // Convert dog years to human years based on size
    dogToHuman(dogYears, size = 'medium') {
      size = size.toLowerCase();
      if (!this.dog[size]) throw new Error(`Invalid dog size: ${size}`);

      const { year1, year2, after } = this.dog[size];
      if (dogYears <= 0) return 0;
      if (dogYears === 1) return year1;
      if (dogYears === 2) return year2;
      return year2 + (dogYears - 2) * after;
    },

    // Convert human years to dog years based on size (approximate inverse)
    humanToDog(humanYears, size = 'medium') {
      size = size.toLowerCase();
      if (!this.dog[size]) throw new Error(`Invalid dog size: ${size}`);

      const { year1, year2, after } = this.dog[size];
      if (humanYears <= 0) return 0;
      if (humanYears <= year1) return 1;
      if (humanYears <= year2) return 2;
      return 2 + (humanYears - year2) / after;
    },

    // Cat years to human years
    catToHuman(catYears) {
      if (catYears <= 0) return 0;
      if (catYears === 1) return 15;
      if (catYears === 2) return 24;
      if (catYears === 3) return 28;
      if (catYears === 4) return 32;
      if (catYears === 5) return 36;
      return 36 + (catYears - 5) * 4;
    },

    // Human years to cat years (approximate inverse)
    humanToCat(humanYears) {
      if (humanYears <= 0) return 0;
      if (humanYears <= 15) return 1;
      if (humanYears <= 24) return 2;
      if (humanYears <= 28) return 3;
      if (humanYears <= 32) return 4;
      if (humanYears <= 36) return 5;
      return 5 + (humanYears - 36) / 4;
    },

    // Horse years to human years (using approximate conversions)
    horseToHuman(horseYears) {
      if (horseYears <= 0) return 0;
      if (horseYears === 1) return 6;
      if (horseYears === 2) return 12;
      if (horseYears === 3) return 16;
      if (horseYears === 5) return 24;
      if (horseYears === 10) return 39;
      if (horseYears === 20) return 69;
      // For other years, approximate 1 horse year ≈ 3 human years
      return horseYears * 3;
    },

    // Human years to horse years (approximate inverse)
    humanToHorse(humanYears) {
      if (humanYears <= 0) return 0;
      if (humanYears <= 6) return 1;
      if (humanYears <= 12) return 2;
      if (humanYears <= 16) return 3;
      if (humanYears <= 24) return 5;
      if (humanYears <= 39) return 10;
      if (humanYears <= 69) return 20;
      return humanYears / 3;
    }
  }
};

export default FAS;
