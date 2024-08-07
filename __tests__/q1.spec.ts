import {findMaxConsecutiveOnes} from "../src/q1"

describe('findMaxConsecutiveOnes', () => {
  test('Test Case: Consecutive 1s at the End', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  });

  test('Test Case: Consecutive 1s in the Middle', () => {
    expect(findMaxConsecutiveOnes([0, 1, 0, 1, 0, 1, 1, 0])).toBe(2);
  });

  test('Test Case: No Consecutive 1s', () => {
    expect(findMaxConsecutiveOnes([0, 0, 0])).toBe(0);
  });

  test('Test Case: Single Element Array', () => {
    expect(findMaxConsecutiveOnes([1])).toBe(1);
  });

  test('Test Case: Consecutive 1s with Zeros in Between', () => {
    expect(findMaxConsecutiveOnes([0, 0, 1, 0, 0, 1, 1, 1])).toBe(3);
  });

  test('Test Case: All Elements are 1s', () => {
    expect(findMaxConsecutiveOnes([1, 1, 1, 1])).toBe(4);
  });

  test('Test Case: Consecutive 1 at the End', () => {
    expect(findMaxConsecutiveOnes([0, 0, 0, 1])).toBe(1);
  });

  test('Test Case: Multiple Sets of Consecutive 1s', () => {
    expect(findMaxConsecutiveOnes([0, 0, 1, 1, 0, 0, 1])).toBe(2);
  });

  test('Test Case: Consecutive 1s Separated by Zeros', () => {
    expect(findMaxConsecutiveOnes([1, 0, 0, 1, 1, 0, 1])).toBe(2);
  });

  test('Test Case: Empty Array', () => {
    expect(findMaxConsecutiveOnes([])).toBe(0);
  });

  test('Test Case: All Zeros', () => {
    expect(findMaxConsecutiveOnes([0, 0, 0, 0])).toBe(0);
  });

  test('Test Case: All Ones', () => {
    expect(findMaxConsecutiveOnes([1, 1, 1, 1])).toBe(4);
  });

  test('Test Case: Single Element (Zero)', () => {
    expect(findMaxConsecutiveOnes([0])).toBe(0);
  });

  test('Test Case: Single Element (One)', () => {
    expect(findMaxConsecutiveOnes([1])).toBe(1);
  });

  test('Test Case: Large Array with Consecutive 1s', () => {
    expect(findMaxConsecutiveOnes(Array(100000).fill(1))).toBe(100000);
  });

  test('Test Case: Large Array with No Consecutive 1s', () => {
    expect(findMaxConsecutiveOnes(Array(100000).fill(0))).toBe(0);
  });
});
