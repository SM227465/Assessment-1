function healthRisk(bmi) {
  if (bmi <= 18.4) return 'Malnutrition risk';
  if (bmi >= 18.5 && bmi <= 24.9) return 'Low risk';
  if (bmi >= 25 && bmi <= 29.9) return 'Enhanced risk';
  if (bmi >= 30 && bmi <= 34.9) return 'Medium risk';
  if (bmi >= 35 && bmi <= 39.9) return 'High risk';
  if (bmi > 40) return 'Very high risk';
}

module.exports = healthRisk;
