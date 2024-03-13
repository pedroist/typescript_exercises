import { arrayRotateLeft, canCompleteCircuit } from "./canCompleteCircuit"

describe("Gas Station", () => {
    it("Example 1", () => {
        const gas = [1, 2, 3, 4, 5]
        const cost = [3, 4, 5, 1, 2]
        const expected = 3
        const result = canCompleteCircuit(gas, cost)
        expect(result).toBe(expected)
    })

    it("Example 2", () => {
        const gas = [2, 3, 4]
        const cost = [3, 4, 3]
        const expected = -1
        const result = canCompleteCircuit(gas, cost)
        expect(result).toBe(expected)
    })

    it("All stations have enough gas with unique solution", () => {
        const gas = [5, 6, 7]
        const cost = [2, 3, 4]
        const expected = 0
        const result = canCompleteCircuit(gas, cost)
        expect(result).toBe(expected)
    })

    it("Not enough gas in any station", () => {
        const gas = [1, 1, 1]
        const cost = [2, 2, 2]
        const expected = -1
        const result = canCompleteCircuit(gas, cost)
        expect(result).toBe(expected)
    })

    it("Not enough gas in any station with unique solution", () => {
        const gas = [3, 4, 5]
        const cost = [6, 7, 8]
        const expected = -1
        const result = canCompleteCircuit(gas, cost)
        expect(result).toBe(expected)
    })

    it("Finishing circuit with exact gas enough, ending with zero gas", () => {
        const gas = [1, 2, 3]
        const cost = [3, 1, 2]
        const expected = 1
        const result = canCompleteCircuit(gas, cost)
        expect(result).toBe(expected)
    })
})

describe("test arrayRotate function", () => {
    it("rotates 1 time to the left", () => {
        let array: number[] = [1, 2, 3, 4]
        let expectedArray: number[] = [2, 3, 4, 1]
        console.log(array)
        arrayRotateLeft(array, 1)
        console.log(array)
        expect(array).toEqual(expectedArray)
    })

    it("rotates 3 times to the left", () => {
        let array: number[] = [1, 2, 3, 4]
        let expectedArray: number[] = [4, 1, 2, 3]
        arrayRotateLeft(array, 3)

        expect(array).toEqual(expectedArray)
    })
})
