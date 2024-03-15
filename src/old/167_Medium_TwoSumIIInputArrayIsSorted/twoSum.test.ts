import { twoSum } from "./twoSum"

describe("167. Two Sum II - Input Array Is Sorted", () => {
    it("Example 1", () => {
        // Arrange
        const numbers = [2, 7, 11, 15]
        const target = 9
        const expectedResult = [1, 2]

        // Act
        const result = twoSum(numbers, target)

        // Assert
        expect(result).toEqual(expectedResult)
    })

    it("Example 2", () => {
        // Arrange
        const numbers = [2, 3, 4]
        const target = 6
        const expectedResult = [1, 3]

        // Act
        const result = twoSum(numbers, target)

        // Assert
        expect(result).toEqual(expectedResult)
    })

    it("Example 3", () => {
        // Arrange
        const numbers = [-1, 0]
        const target = -1
        const expectedResult = [1, 2]

        // Act
        const result = twoSum(numbers, target)

        // Assert
        expect(result).toEqual(expectedResult)
    })
})
