const { bmis } = require('../bmi_category');
const healthRisk = require('../health_risk');

describe('Health Risk', () => {
  it('should return true if function is defined', () => {
    expect(healthRisk).toBeDefined();
  });

  it('should return health risk of 1st person', () => {
    const result = healthRisk(bmis[0]);
    expect(result).toMatch(/Medium risk/);
    expect(result).toContain('Medium risk');
  });

  it('should return health risk of 2nd person', () => {
    const result = healthRisk(bmis[1]);
    expect(result).toMatch(/Medium risk/);
    expect(result).toContain('Medium risk');
  });

  it('should return health risk of 3rd person', () => {
    const result = healthRisk(bmis[2]);
    expect(result).toMatch(/Low risk/);
    expect(result).toContain('Low risk');
  });

  it('should return health risk of 4th person', () => {
    const result = healthRisk(bmis[3]);
    expect(result).toMatch(/Low risk/);
    expect(result).toContain('Low risk');
  });

  it('should return health risk of 5th person', () => {
    const result = healthRisk(bmis[4]);
    expect(result).toMatch(/Medium risk/);
    expect(result).toContain('Medium risk');
  });

  it('should return health risk of 6th person', () => {
    const result = healthRisk(bmis[5]);
    expect(result).toMatch(/Enhanced risk/);
    expect(result).toContain('Enhanced risk');
  });
});
