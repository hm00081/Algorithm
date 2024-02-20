class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.child = null; // 하위 리스트를 가리키는 포인터
    }
}

function flatten(head) {
    let current = head;
    let tail = head;

    // 먼저 탐색을 통해 리스트의 마지막 노드를 찾습니다.
    while (tail.next !== null) {
        tail = tail.next;
    }

    // 현재 노드를 순회하면서 각 노드의 하위 리스트를 처리합니다.
    while (current !== null) {
        if (current.child !== null) {
            tail.next = current.child; // 마지막 노드의 next를 현재 노드의 child로 설정

            // 새로운 tail을 찾기 위해 child 리스트를 탐색합니다.
            while (tail.next !== null) {
                tail = tail.next;
            }

            current.child = null; // 처리된 하위 리스트의 연결을 끊습니다.
        }
        current = current.next; // 다음 노드로 이동
    }
    return head; // 단층화된 리스트의 head 반환
}
