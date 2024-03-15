import { romanToInt } from "./romanToInteger"

describe("Roman To Integer", () => {
    it("Example 1", () => {
        // Arrange
        const s = "III"
        const expectedValue = 3

        // Act
        const result = romanToInt(s)

        // Assert
        expect(result).toBe(expectedValue)
    })

    it("Example 2", () => {
        // Arrange
        const s = "LVIII"
        const expectedValue = 58

        // Act
        const result = romanToInt(s)

        // Assert
        expect(result).toBe(expectedValue)
    })

    it("Example 3", () => {
        // Arrange
        const s = "MCMXCIV"
        const expectedValue = 1994

        // Act
        const result = romanToInt(s)

        // Assert
        expect(result).toBe(expectedValue)
    })
})
