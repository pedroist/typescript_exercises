import { /*evalNumb, */ maxProfit } from "./maxProfit"

describe("maxProfit", () => {
    it("returns the maximum profit for the given prices - Example 1", () => {
        const prices: number[] = [7, 1, 5, 3, 6, 4]
        expect(maxProfit(prices)).toEqual(7)
    })

    it("returns the maximum profit for the given prices - Example 2", () => {
        const prices: number[] = [1, 2, 3, 4, 5]
        expect(maxProfit(prices)).toEqual(4)
    })

    it("returns the maximum profit for the given prices - Example 3", () => {
        const prices: number[] = [7, 6, 4, 3, 1]
        expect(maxProfit(prices)).toEqual(0)
    })

    it("returns 0 when prices array has only one element", () => {
        const prices: number[] = [5]
        expect(maxProfit(prices)).toEqual(0)
    })

    it("returns 0 when prices array has all elements in descending order", () => {
        const prices: number[] = [5, 4, 3, 2, 1]
        expect(maxProfit(prices)).toEqual(0)
    })

    it("returns the correct profit when there are multiple profitable transactions", () => {
        const prices: number[] = [3, 3, 5, 0, 0, 3, 1, 4]
        // expected buy days [1, 3, 6]
        // expected sell days [2, 5, 7]
        expect(maxProfit(prices)).toEqual(8)
    })

    it("returns 0 when prices array has all elements equal", () => {
        const prices: number[] = [1, 1, 1, 1, 1]
        expect(maxProfit(prices)).toEqual(0)
    })

    it("has zeros after last buy", () => {
        const prices: number[] = [3, 2, 6, 5, 0, 3]
        expect(maxProfit(prices)).toEqual(7)
    })

    it("prices end with zero", () => {
        const prices: number[] = [1, 1, 0]
        expect(maxProfit(prices)).toEqual(0)
    })

    it("prices start with zero", () => {
        const prices: number[] = [0, 5, 5, 6, 2, 1, 1, 3]
        expect(maxProfit(prices)).toEqual(8)
        // expected buy days [0, 6]
        // expected sell days [ 3, 7]
    })
})

describe("test evalNumb function", () => {
    it("should return false if input value is a negative value", () => {
        const value: number = -1

        const result: boolean | undefined = evalNumb(value)

        expect(result).toBe(false)
    })

    it("should return true if input value is a positive number", () => {
        const value: number = 1

        const result: boolean | undefined = evalNumb(value)

        expect(result).toBeTruthy()
    })

    it("should return undefined if input value is zero", () => {
        const value: number = 0

        const result: boolean | undefined = evalNumb(value)

        expect(result).toBeUndefined()
    })
})
