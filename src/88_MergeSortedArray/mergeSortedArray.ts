/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): void {
    // Remove last n chars
    nums1.splice(m, n) // in index 3, removes 3 elements

    console.log(nums1)
    /* 
    Note: this won't work, re-assigning the array to a new one, the reference to the initial gets lost,
    and the changes not applied outside the merge function scope
    
    nums1 = [...nums1, ...nums2] -> re-assign
    nums1 = nums1.concat(nums2) -> re-assign, porque concat nao altera arrays originais
    */

    // Add nums2 into nums2, keeping the reference of nums1 from outside merge function
    for (let num of nums2) {
        nums1.push(num)
    }

    console.log(nums1)

    // sort asc
    nums1.sort((a, b) => a - b)
    console.log(nums1)
}
