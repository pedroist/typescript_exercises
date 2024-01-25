import { removeElement } from "./removeElement"

describe("test removing correctly elements from array", () => {
    it("Example 1", () => {
        // Arrange
        let nums = [3, 2, 2, 3]
        let val = 3

        let expectedNums = [2, 2]

        // Act
        let k = removeElement(nums, val)

        // Assert
        expect(k).toBe(expectedNums.length)

        for (let i = 0; i < expectedNums.length; i++) {
            expect(nums[i]).toBe(expectedNums[i])
        }
    })

    it("Example 2", () => {
        // Arrange
        let nums = [0, 1, 2, 2, 3, 0, 4, 2]
        let val = 2

        let expectedNums = [0, 1, 3, 0, 4]

        // Act
        let k = removeElement(nums, val)

        // Assert
        expect(k).toBe(expectedNums.length)

        for (let i = 0; i < expectedNums.length; i++) {
            expect(nums[i]).toBe(expectedNums[i])
        }
    })
})
