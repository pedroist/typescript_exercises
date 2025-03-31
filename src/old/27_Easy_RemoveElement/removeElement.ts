export function removeElement(nums: number[], val: number): number {
    console.log(nums)

    /**
    This doesn't work cause filter creates new array and doesn't change initial one
    
    let a = nums.filter((num) => num === val)
    */

    /* Option A - 2 cycles - since the rest of the nums array doesn't matter,
    we don't need to delete the entries from the end not relevant - runtime 104ms */
    /*
    let filteredNums: number[] = nums.filter((num) => num !== val)

    for (let i = 0; i < filteredNums.length; i++) {
        nums[i] = filteredNums[i]
    }

    return filteredNums.length
    */

    /* Option B - only 1 cycle - runtime 88ms but splice has O(n) so that in a loop O(n2) quadratrical */
    /*
    let removedCount: number = 0
    const numsInitialLength = nums.length

    for (let i = 0; i < numsInitialLength; i++) {
        if (nums[i - removedCount] === val) {
            nums.splice(i - removedCount, 1)
            removedCount++
        }
    }

    return nums.length
    */

    // Option C - 2 pointer solution - by chatGPT - O(n) loop + coping element constant complex - so it has O(n)
    let k: number = 0 // k will track the number of valid elements, so this is replacing on the same array some invalid numb by another valid in the array

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }

    return k
}
