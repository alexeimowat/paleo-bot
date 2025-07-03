import { describe, expect, test } from "bun:test";
import { getRandomIndex } from "./array";

describe('getRandomIndex', () => {
  test('min less than max', () => {
    expect(() => getRandomIndex(5,3)).toThrowError('min cannot be greater than or equal to max')
  })

  test('min equal to max', () => {
    expect(() => getRandomIndex(1, 1)).toThrowError('min cannot be greater than or equal to max')
  })

  test('resulting random number is within specified range', () => {
    const max = 10
    const min = 0

    for (let i = 0; i < 1000; i++) {
      const randomIndex = getRandomIndex(min, max)
      expect(randomIndex).toBeLessThan(max)
      expect(randomIndex).toBeGreaterThanOrEqual(min)      
    }
  })

  test('should return min when max is min+1', () => {
    const max = 8
    const min = 7

    expect(getRandomIndex(min, max)).toBe(min)
  })
})
