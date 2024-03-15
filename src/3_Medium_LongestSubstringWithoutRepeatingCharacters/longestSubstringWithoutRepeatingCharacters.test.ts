import { lengthOfLongestSubstring } from "./longestSubstringWithoutRepeatingCharacters"

describe("Length of Longest Substring", () => {
    it("Example 1", () => {
        // Arrange
        const s = "abcabcbb"
        const expectedResult = 3

        // Act
        const result = lengthOfLongestSubstring(s)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 2", () => {
        // Arrange
        const s = "bbbbb"
        const expectedResult = 1

        // Act
        const result = lengthOfLongestSubstring(s)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 3", () => {
        // Arrange
        const s = "pwwkew"
        const expectedResult = 3

        // Act
        const result = lengthOfLongestSubstring(s)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 4", () => {
        // Arrange
        const s = "aab"
        const expectedResult = 2

        // Act
        const result = lengthOfLongestSubstring(s)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 5", () => {
        // Arrange
        const s = "dvdf"
        const expectedResult = 3

        // Act
        const result = lengthOfLongestSubstring(s)

        // Assert
        expect(result).toBe(expectedResult)
    })
})
