const { personsHeightInMeter, personsWeightInKg } = require('../data/db');
const calculateBMI = require('../bmi_calculator');

describe('BMI Calculation', () => {
  it('should return true if function is defined', () => {
    expect(calculateBMI).toBeDefined();
  });

  it('should return BMI of 1st person', () => {
    const result = calculateBMI(personsWeightInKg[0], personsHeightInMeter[0]);
    expect(result).toBe(32.8);
  });

  it('should return BMI of 2nd person', () => {
    const result = calculateBMI(personsWeightInKg[1], personsHeightInMeter[1]);
    expect(result).toBe(32.8);
  });

  it('should return BMI of 3rd person', () => {
    const result = calculateBMI(personsWeightInKg[2], personsHeightInMeter[2]);
    expect(result).toBe(23.8);
  });

  it('should return BMI of 4th person', () => {
    const result = calculateBMI(personsWeightInKg[3], personsHeightInMeter[3]);
    expect(result).toBe(22.5);
  });

  it('should return BMI of 5th person', () => {
    const result = calculateBMI(personsWeightInKg[4], personsHeightInMeter[4]);
    expect(result).toBe(31.1);
  });

  it('should return BMI of 6th person', () => {
    const result = calculateBMI(personsWeightInKg[5], personsHeightInMeter[5]);
    expect(result).toBe(29.4);
  });
});
