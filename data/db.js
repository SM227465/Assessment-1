const fs = require('fs');

const persons = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

// weight in KG
const personsWeightInKg = persons.map((person) => person.WeightKg * 1);

// Height in meter
const personsHeightInMeter = persons.map((person) => person.HeightCm / 100);

module.exports = { personsWeightInKg, personsHeightInMeter, persons };
