const { isWordSolved, stringify, createBlankWordArray } = require('../lib');

// 'fit'/'it.focus' focuses test, 'xit'/'it.skip' skips test
describe('stringify', () => {
  test('should convert an arbitrary string array to a string with space-separated characters', () => {
    const strArr = ['h', 'e', 'l', 'l', 'o'];
    expect(stringify(strArr)).toBe('h e l l o');
  });

  test('should maintain case', () => {
    const strArr = ['H', 'e', 'l', 'l', 'o'];
    expect(stringify(strArr)).toBe('H e l l o');
    const allCapsArr = ['H', 'E', 'L', 'L', 'O'];
    expect(stringify(allCapsArr)).toBe('H E L L O');
  });

  test('should maintain white-space', () => {
    const strArr = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    expect(stringify(strArr)).toBe('H e l l o   w o r l d');
  });

  test('should return empty string when given empty array', () => {
    expect(stringify([])).toBe('');
  });

  test('should properly handle array entries with multiple characters', () => {
    const strArr = ['H', 'el', 'l', 'o'];
    expect(stringify(strArr)).toBe('H el l o');
  });

  test('should handle no input', () => {
    expect(stringify()).toBe('');
  });
});

describe('createBlankWordArray', () => {
  test('should return an array of arbitrary length full of underscores', () => {
    const result = createBlankWordArray(10);
    // toEqual can check deep equality
    expect(result).toEqual(['_', '_', '_', '_', '_', '_', '_', '_', '_', '_']);
    // test length
    expect(result).toHaveLength(10);
    // test all underscores
    expect(result.every(char => char === '_')).toBeTruthy();
  });

  test('should return an empty arry when passed a length of 0', () => {
    expect(createBlankWordArray(0)).toHaveLength(0);
  });

  test('should gracefully handle undefined input', () => {
    expect(createBlankWordArray()).toHaveLength(0);
  });

  test('should return empty array on non-number inputs', () => {
    expect(createBlankWordArray('a word')).toHaveLength(0);
    expect(createBlankWordArray([1, 2, 3])).toHaveLength(0);
    expect(createBlankWordArray({ key: 'value' })).toHaveLength(0);
  });
});
