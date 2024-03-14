import { containsDuplicate } from "./containsDuplicate"

describe("Contains Duplicate", () => {
    it("Example 1", () => {
        // Arrange
        const array = [1, 2, 3, 1]
        const expectedResult = true

        // Act
        const result = containsDuplicate(array)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 2", () => {
        // Arrange
        const array = [1, 2, 3, 4]
        const expectedResult = false

        // Act
        const result = containsDuplicate(array)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 3", () => {
        // Arrange
        const array = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
        const expectedResult = true

        // Act
        const result = containsDuplicate(array)

        // Assert
        expect(result).toBe(expectedResult)
    })
})
