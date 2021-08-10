const { persons } = require('./data/db');

const bmis = persons.map(
  (person) =>
    Math.round(
      (person.WeightKg / ((person.HeightCm / 100) * (person.HeightCm / 100))) *
        10
    ) / 10
);

function bmiCategory(bmi) {
  if (bmi <= 18.4) return 'Under weight';
  if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
  if (bmi >= 25 && bmi <= 29.9) return 'Over weight';
  if (bmi >= 30 && bmi <= 34.9) return 'Moderately obese';
  if (bmi >= 35 && bmi <= 39.9) return 'Severely obese';
  if (bmi > 40) return 'Very severely obese';
}

module.exports = { bmis, bmiCategory };
