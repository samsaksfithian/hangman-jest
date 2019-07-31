const { stringify } = require('../lib');

// 'fit' focuses test, 'xit' skips test
describe('stringify', () => {
  it('should convert an arbitrary string array to a string with space-separated characters', () => {
    const strArr = ['h', 'e', 'l', 'l', 'o'];
    expect(stringify(strArr)).toBe('h e l l o');
  });

  it('should maintain case', () => {
    const strArr = ['H', 'e', 'l', 'l', 'o'];
    expect(stringify(strArr)).toBe('H e l l o');
    const allCapsArr = ['H', 'E', 'L', 'L', 'O'];
    expect(stringify(allCapsArr)).toBe('H E L L O');
  });

  it('should maintain white-space', () => {
    const strArr = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    expect(stringify(strArr)).toBe('H e l l o   w o r l d');
  });

  it('should return empty string when given empty array', () => {
    expect(stringify([])).toBe('');
  });

  it('should properly handle array entries with multiple characters', () => {
    const strArr = ['H', 'el', 'l', 'o'];
    expect(stringify(strArr)).toBe('H el l o');
  });

  it('should handle no input', () => {
    expect(stringify()).toBe('');
  });
});
