export function lengthOfLongestSubstring(s: string): number {
    let charIndexMap: Map<string, number> = new Map()
    let left: number = 0
    let maxLength = 0

    for (let right = 0; right < s.length; right++) {
        if (charIndexMap.has(s[right])) {
            left = Math.max(left, charIndexMap.get(s[right])! + 1)
        }
        charIndexMap.set(s[right], right)
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}
