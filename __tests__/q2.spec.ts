import {findSmallestMissingPositive} from '../src/q2';

describe('findSmallestMissingPositive', () => {
  test('Test Case: Smallest Missing Positive Integer is 3', () => {
    expect(findSmallestMissingPositive([1, 2, 0])).toBe(3);
  });

  test('Test Case: Smallest Missing Positive Integer is 2', () => {
    expect(findSmallestMissingPositive([3, 4, -1, 1])).toBe(2);
  });

  test('Test Case: Smallest Missing Positive Integer is 1', () => {
    expect(findSmallestMissingPositive([7, 8, 9, 11, 12])).toBe(1);
  });

  test('Test Case: Smallest Missing Positive Integer is 1 (Only Negative Integers)', () => {
    expect(findSmallestMissingPositive([-1, -2, -3])).toBe(1);
  });

  test('Test Case: Smallest Missing Positive Integer is 5 (All Positive Integers Present)', () => {
    expect(findSmallestMissingPositive([1, 2, 3, 4])).toBe(5);
  });

  test('Test Case: Smallest Missing Positive Integer is 1 (Empty Array)', () => {
    expect(findSmallestMissingPositive([])).toBe(1);
  });

  test('Test Case: Smallest Missing Positive Integer is 1 (Array with Only Negative Integers)', () => {
    expect(findSmallestMissingPositive([-10, -5, -7, -3])).toBe(1);
  });

  test('Test Case: Smallest Missing Positive Integer is 2 (Array with Only One Positive Integer)', () => {
    expect(findSmallestMissingPositive([-5, -10, 1, -7, -3])).toBe(2);
  });

  test('Test Case: Smallest Missing Positive Integer is 1 (Array with All Negative Integers and Zero)', () => {
    expect(findSmallestMissingPositive([-5, -10, -7, -3, 0])).toBe(1);
  });

  test('Test Case: Smallest Missing Positive Integer is 4 (Array with Repeated Positive Integers)', () => {
    expect(findSmallestMissingPositive([1, 2, 2, 1, 3])).toBe(4);
  });

  test('Test Case: Smallest Missing Positive Integer is 4 (Array with Large Range)', () => {
    expect(findSmallestMissingPositive([-1000, 1, 2, 3, 1000])).toBe(4);
  });

  test('Test Case: Smallest Missing Positive Integer is 1 (Array with Large Range of Negative Integers)', () => {
    expect(findSmallestMissingPositive(Array.from({length: 100000}, (_, index) => -index))).toBe(1);
  });

  test('Test Case: Smallest Missing Positive Integer is 1 (Array with All Negative Integers and Zero)', () => {
    expect(findSmallestMissingPositive([-5, -10, -7, -3, 0])).toBe(1);
  });
});
