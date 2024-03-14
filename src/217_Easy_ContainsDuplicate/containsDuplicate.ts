export function containsDuplicate(nums: number[]): boolean {
    // Use a set and check if the length of the set is lower than it has duplicates
    const mySet: Set<number> = new Set(nums)

    return mySet.size < nums.length
}
