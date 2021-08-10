// Calculate BMI
function calculateBMI(mass, height) {
  const bmi = mass / (height * height);
  return Math.round(bmi * 10) / 10;
}

module.exports = calculateBMI;
