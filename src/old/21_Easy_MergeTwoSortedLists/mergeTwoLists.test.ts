import { mergeTwoLists, ListNode } from "./mergeTwoLists"

// Helper function to check if two linked lists are equal
function areListsEqual(l1: ListNode | null, l2: ListNode | null): boolean {
    while (l1 !== null && l2 !== null) {
        if (l1.val !== l2.val) return false
        l1 = l1.next
        l2 = l2.next
    }
    return l1 === null && l2 === null
}

describe("mergeTwoLists", () => {
    test("merges two non-empty sorted lists", () => {
        const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
        const expected = new ListNode(
            1,
            new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(3, new ListNode(4, new ListNode(4)))
                )
            )
        )

        const result = mergeTwoLists(list1, list2)
        expect(areListsEqual(result, expected)).toBe(true)
    })

    test("merges when one list is empty", () => {
        const list1 = null
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
        const expected = new ListNode(1, new ListNode(3, new ListNode(4)))

        const result = mergeTwoLists(list1, list2)
        expect(areListsEqual(result, expected)).toBe(true)
    })

    test("returns an empty list when both inputs are empty", () => {
        const list1 = null
        const list2 = null
        const expected = null

        const result = mergeTwoLists(list1, list2)
        expect(result).toBe(expected)
    })
})
