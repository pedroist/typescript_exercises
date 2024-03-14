export function romanToInt(s: string): number {
    let result: number = 0

    const romanToIntMap: Map<string, number> = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ])

    // Iterate string and traduce to array of numeric values

    for (let i = 0; i < s.length; i++) {
        let currentChar: number | undefined = romanToIntMap.get(s[i])
        let nextChar: number | undefined = romanToIntMap.get(s[i + 1])

        if (currentChar) {
            // Edge case: when the next char is bigger than the current, apply subtraction
            if (nextChar && currentChar < nextChar) {
                result += nextChar - currentChar
                i++ // then the "for loop" also makes another i++
                continue
            }
            result += currentChar
        }
    }

    return result
}
