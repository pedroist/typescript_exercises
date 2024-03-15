import { isPalindrome } from "./isPalindrome"

describe("Is valid Palindrome", () => {
    it("Example 1", () => {
        // Arrange
        const s = "A man, a plan, a canal: Panama"
        const expectedResult = true

        // Act
        const result = isPalindrome(s)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 2", () => {
        // Arrange
        const s = "race a car"
        const expectedResult = false

        // Act
        const result = isPalindrome(s)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 3", () => {
        // Arrange
        const s = " "
        const expectedResult = true

        // Act
        const result = isPalindrome(s)

        // Assert
        expect(result).toBe(expectedResult)
    })
})
