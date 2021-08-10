const { bmis, bmiCategory } = require('../bmi_category');

describe('BMI Categories', () => {
  it('should return true if function is defined', () => {
    expect(bmiCategory).toBeDefined();
  });

  it('should return BMI category of 1st person', () => {
    const result = bmiCategory(bmis[0]);
    expect(result).toMatch(/Moderately obese/);
    expect(result).toContain('Moderately obese');
  });

  it('should return BMI category of 2nd person', () => {
    const result = bmiCategory(bmis[1]);
    expect(result).toMatch(/Moderately obese/);
    expect(result).toContain('Moderately obese');
  });

  it('should return BMI category of 3rd person', () => {
    const result = bmiCategory(bmis[2]);
    expect(result).toMatch(/Normal weight/);
    expect(result).toContain('Normal weight');
  });

  it('should return BMI category of 4th person', () => {
    const result = bmiCategory(bmis[3]);
    expect(result).toMatch(/Normal weight/);
    expect(result).toContain('Normal weight');
  });

  it('should return BMI category of 5th person', () => {
    const result = bmiCategory(bmis[4]);
    expect(result).toMatch(/Moderately obese/);
    expect(result).toContain('Moderately obese');
  });

  it('should return BMI category of 6th person', () => {
    const result = bmiCategory(bmis[5]);
    expect(result).toMatch(/Over weight/);
    expect(result).toContain('Over weight');
  });
});
