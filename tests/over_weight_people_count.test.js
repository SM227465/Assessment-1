const { bmis } = require('../bmi_category');
const overWeightCount = require('../over_weight_people_count');

describe('Over weight people count', () => {
  it('should return true if function is defined', () => {
    expect(overWeightCount).toBeDefined();
  });

  it('should return number of over weighted persons', () => {
    const result = overWeightCount(bmis);
    expect(result).toBe(1);
  });
});
