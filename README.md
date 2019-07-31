# Testing Hangman with Jest

## Setup

1. Clone this repository
2. Make your own repository on GitHub
3. `$ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git`

## Exercise

1. Install Jest: `npm install --save-dev jest`
1. test `stringify` with `toBe`
1. test `createBlankWordArray` with `toEqual`
1. test `isWordSolved` with `toBeTruthy`
   1. explain `.not`
   2. test with bad input to explain `toThrow`
1. test `print` with mocked `console.log`
   1. explain `toBeCalledWith` and `toBeCalledTimes`
   2. explain resetting a mock with `mockClear`
1. test `askForALetter` with mocked `readline-sync`