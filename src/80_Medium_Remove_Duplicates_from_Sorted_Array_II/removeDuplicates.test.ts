import { removeDuplicates } from "./removeDuplicates"

describe("removeDuplicates", () => {
    it("should return correct length and modified array for Example 1", () => {
        const nums = [1, 1, 1, 2, 2, 3]
        const expectedNums = [1, 1, 2, 2, 3]
        const expectedLength = 5

        const resultLength = removeDuplicates(nums)

        expect(resultLength).toBe(expectedLength)
        expect(nums.slice(0, resultLength)).toEqual(expectedNums)
    })

    it("should return correct length and modified array for Example 2", () => {
        const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
        const expectedNums = [0, 0, 1, 1, 2, 3, 3]
        const expectedLength = 7

        const resultLength = removeDuplicates(nums)

        expect(resultLength).toBe(expectedLength)
        expect(nums.slice(0, resultLength)).toEqual(expectedNums)
    })

    it("should return correct length and modified array for array with no duplicates", () => {
        const nums = [1, 2, 3, 4, 5]
        const expectedNums = [1, 2, 3, 4, 5]
        const expectedLength = 5

        const resultLength = removeDuplicates(nums)

        expect(resultLength).toBe(expectedLength)
        expect(nums.slice(0, resultLength)).toEqual(expectedNums)
    })

    it("should return correct length and modified array for array with all duplicates", () => {
        const nums = [1, 1, 1, 1, 1, 1]
        const expectedNums = [1, 1]
        const expectedLength = 2

        const resultLength = removeDuplicates(nums)

        expect(resultLength).toBe(expectedLength)
        expect(nums.slice(0, resultLength)).toEqual(expectedNums)
    })

    it("should return 0 for an empty array", () => {
        const nums: number[] = []
        const expectedLength = 0

        const resultLength = removeDuplicates(nums)

        expect(resultLength).toBe(expectedLength)
    })

    // Add more test cases as needed
})
