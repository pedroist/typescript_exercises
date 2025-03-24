// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

/* Solution 1 Iteractive - by chatGPT - complexity O(n+m)*/
// function mergeTwoLists(
//     list1: ListNode | null,
//     list2: ListNode | null
// ): ListNode | null {
//     // Create a dummy node to act as the start of the merged list
//     let dummy: ListNode = new ListNode()
//     let current: ListNode = dummy

//     // While both lists are non-empty, compare the values and attach the smaller node to the merged list
//     while (list1 !== null && list2 !== null) {
//         if (list1.val <= list2.val) {
//             current.next = list1
//             list1 = list1.next
//         } else {
//             current.next = list2
//             list2 = list2.next
//         }
//         current = current.next // Move the pointer to the next position in the merged list
//     }

//     // Attach the remaining nodes (if any) from list1 or list2 - No caso de termos percurrido toda uma lista, o ciclo acaba e a outra lista ainda tinham nodes que tinham sobrado, pois vamos acrescentar esse proximo node, que seguirá com a lista dos nodes que estao agarrados que ainda nao tinham sido usados
//     if (list1 !== null) {
//         current.next = list1
//     } else {
//         current.next = list2
//     }

//     // Return the merged list, which starts at dummy.next
//     return dummy.next
// }

/* Solution 2 Recursive - by chatGPT - complexity O(n+m)*/
function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (list1 === null) return list2
    if (list2 === null) return list1

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
}
