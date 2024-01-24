import { merge } from "./mergeSortedArray"

describe("mergeSortedArray", () => {
    it("should merge two sorted arrays", () => {
        // Example 1
        let nums1 = [1, 2, 3, 0, 0, 0]
        let m = 3
        let nums2 = [2, 5, 6]
        let n = 3
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6])

        // Example 2
        nums1 = [1]
        m = 1
        nums2 = []
        n = 0
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual([1])

        // Example 3
        nums1 = [0]
        m = 0
        nums2 = [1]
        n = 1
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual([1])
    })

    // Add more test cases as needed based on constraints and edge cases
})
