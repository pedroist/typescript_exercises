export function isPalindrome(s: string): boolean {
    // remove non-alphanumeric characters
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    //Reverse string
    const reversedString = cleanString.split("").reverse().join("")

    return reversedString === cleanString
}
