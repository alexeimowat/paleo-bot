/**
 * Returns a random integer between min (inclusive) and max (exclusive).
 * @param min The minimum value (inclusive).
 * @param max The maximum value (exclusive).
 * @returns A random integer.
 */
export const getRandomIndex = (min: number, max: number): number => {
    if (min >= max) {
        throw new Error("min cannot be greater than or equal to max")
    }
    
    return Math.floor(Math.random() * (max - min) + min);
}
