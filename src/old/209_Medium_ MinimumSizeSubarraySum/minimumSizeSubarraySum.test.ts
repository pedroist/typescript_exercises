import { minSubArrayLen } from "./minimumSizeSubarraySum"

describe("Contains Duplicate", () => {
    it("Example 1", () => {
        // Arrange
        const nums = [2, 3, 1, 2, 4, 3]
        const target = 7
        const expectedResult = 2

        // Act
        const result = minSubArrayLen(target, nums)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 2", () => {
        // Arrange
        const nums = [1, 4, 4]
        const target = 4
        const expectedResult = 1

        // Act
        const result = minSubArrayLen(target, nums)

        // Assert
        expect(result).toBe(expectedResult)
    })

    it("Example 3", () => {
        // Arrange
        const nums = [1, 1, 1, 1, 1, 1, 1, 1]
        const target = 11
        const expectedResult = 0

        // Act
        const result = minSubArrayLen(target, nums)

        // Assert
        expect(result).toBe(expectedResult)
    })
})
