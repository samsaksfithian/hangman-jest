const hangman = require('../hangman');
// let { print } = require('../lib');

describe('playHangman', () => {
  console.log = jest.fn();
  const hangmanSpy = jest.spyOn(hangman, 'playHangman');

  afterEach(() => {
    console.log.mockClear();
    hangmanSpy.mockClear();
  });

  test('should print success message and end when a completed word has be been revealed', () => {
    const targetWord = 'abc';
    const guessedWord = ['a', 'b', 'c'];
    hangman.playHangman(targetWord, guessedWord);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`You win! The word was '${targetWord}'`);
    expect(hangmanSpy).toHaveBeenCalledTimes(1);
  });

  test('should print a failure message and and when you run out of strikes', () => {
    const targetWord = 'abc';
    const guessedWord = ['a', '_', 'c'];
    const maxStrikes = 5;
    hangman.playHangman(targetWord, guessedWord, maxStrikes, maxStrikes);
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toBeCalledWith(`You lose! The word was '${targetWord}'`);
    expect(hangmanSpy).toHaveBeenCalledTimes(1);
  });

  test('should continue play if there was no win or loss', () => {
    // TODO: code this
  });
});
