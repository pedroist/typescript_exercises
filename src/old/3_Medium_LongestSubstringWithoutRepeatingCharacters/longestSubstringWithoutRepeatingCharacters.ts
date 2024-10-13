// Sliding window algorithm
export function lengthOfLongestSubstring(s: string): number {
    let charIndexMap: Map<string, number> = new Map()
    let left: number = 0
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {
        if (charIndexMap.has(s[right])) {
            left = Math.max(left, charIndexMap.get(s[right])! + 1) // move left to one index above the last ocurrence of s[right]
        }
        charIndexMap.set(s[right], right)
        maxLength = Math.max(maxLength, right - left + 1) // plus 1 because the left and right indexes are inclusive. Eg. [a, b, c], left= 0, right=2, length for "abc" is 2-0+1=3
    }

    return maxLength
}
