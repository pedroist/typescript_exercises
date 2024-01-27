import { merge } from "./mergeSortedArray"

describe("mergeSortedArray", () => {
    it("Example 1 - should merge two sorted arrays", () => {
        let nums1 = [1, 2, 3, 0, 0, 0]
        let m = 3
        let nums2 = [2, 5, 6]
        let n = 3
        merge(nums1, m, nums2, n)

        expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
    })

    it("Example 2 - should merge array with empty array", () => {
        let nums1 = [1]
        let m = 1
        let nums2 = []
        let n = 0
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual([1])
    })

    it("Example 3 - should merge empty array with array", () => {
        let nums1 = [0]
        let m = 0
        let nums2 = [1]
        let n = 1
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual([1])
    })
})
