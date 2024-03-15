import { containsNearbyDuplicate } from "./containsDuplicateII"

describe("Contains Duplicate", () => {
    it("Example 1", () => {
        // Arrange
        const nums = [1, 2, 3, 1]
        const k = 3
        const expectedResult = true

        // Act
        const result = containsNearbyDuplicate(nums, k)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 2", () => {
        // Arrange
        const nums = [1, 0, 1, 1]
        const k = 1
        const expectedResult = true

        // Act
        const result = containsNearbyDuplicate(nums, k)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 3", () => {
        // Arrange
        const nums = [1, 2, 3, 1, 2, 3]
        const k = 2
        const expectedResult = false

        // Act
        const result = containsNearbyDuplicate(nums, k)

        // Assert
        expect(result).toBe(expectedResult)
    })
})
