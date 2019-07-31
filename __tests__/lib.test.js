const readlineSync = require('readline-sync');
const {
  isWordSolved,
  stringify,
  randomlySelectWord,
  createBlankWordArray,
  askForALetter,
  print,
} = require('../lib');

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

describe('isWordSolved', () => {
  test('should return false if there is at least one underscore', () => {
    const result = isWordSolved(['a', '_', 'c']);
    expect(result).toBeFalsy();
  });

  test('should return true if there are no underscores', () => {
    const result = isWordSolved(['a', 'b', 'c']);
    expect(result).toBeTruthy();
  });

  test('should throw a TypeError if passed undefined input', () => {
    expect(isWordSolved).toThrowError(TypeError);
  });

  test('should return false on empty input array', () => {
    // TODO: implement this
  });
});

describe('print', () => {
  test('should log outpot to the console', () => {
    // mock the console.log function
    console.log = jest.fn();
    print('Some input');
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Some input');
    // clears the mocked function data/calls/etc
    console.log.mockClear();

    // TODO: actually reset the function (console.log) back to original functionality
  });
});

describe('randomlySelectWord', () => {
  // Math.random = jest.fn(() => 0.5);
  // Math.random = jest.fn().mockReturnValue(0.5);
  Math.random = jest.fn();

  test('should be able to return any word in the array', () => {
    Math.random
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.99);
    const arr = ['first', 'second', 'third'];
    const result1 = randomlySelectWord(arr);
    expect(result1).toBe('first');
    const result2 = randomlySelectWord(arr);
    expect(result2).toBe('second');
    const result3 = randomlySelectWord(arr);
    expect(result3).toBe('third');
  });

  // TODO: test for empty array
  // TODO: test for undefined input
});

jest.mock('readline-sync');
describe('askForALetter', () => {
  test('should return the letter that the user put in', () => {
    readlineSync.question
      .mockReturnValueOnce('a')
      .mockReturnValueOnce('z')
      .mockReturnValueOnce('q');
    expect(askForALetter()).toBe('a');
    expect(askForALetter()).toBe('z');
    expect(askForALetter()).toBe('q');
  });
});
