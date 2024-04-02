class Node {
    constructor(value) {
        this.value = value; // 노드가 저장하는 값
        this.next = null; // 다음 노드를 가리키는 포인터, 초기에는 null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; // 리스트의 첫 번째 노드를 가리키는 포인터
        this.tail = null; // 리스트의 마지막 노드를 가리키는 포인터
    } // head, tail!!!!

    find(value) {
        // 주어진 값을 가진 노드를 찾아 반환합니다.
        let curNode = this.head;
        while (curNode !== null && curNode.value !== value) {
            curNode = curNode.next;
        }
        return curNode;
    }

    append(newValue) {
        // 리스트의 끝에 새 노드를 추가합니다.
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = newNode; // 리스트가 비어있다면 head와 tail 모두 새 노드를 가리킵니다.
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // 리스트가 비어있지 않다면 tail 다음에 새 노드를 추가하고 tail을 업데이트합니다.
            this.tail = newNode;
        }
    }

    insert(node, newValue) {
        // 주어진 노드 뒤에 새 노드를 삽입합니다.
        const newNode = new Node(newValue);
        newNode.next = node.next; // 새 노드의 next를 node의 다음 노드로 설정합니다.
        node.next = newNode; // node의 next를 새 노드로 설정합니다.
    }

    remove(value) {
        // 주어진 값을 가진 노드를 찾아서 리스트에서 제거합니다.
        if (this.head.value === value) {
            this.head = this.head.next; // 만약 head가 제거할 노드라면 head를 업데이트합니다.
        } else {
            let prevNode = this.head;
            while (prevNode.next !== null && prevNode.next.value !== value) {
                prevNode = prevNode.next;
            }
            if (prevNode.next !== null) {
                // 찾은 노드를 리스트에서 제거합니다.
                prevNode.next = prevNode.next.next;
                if (prevNode.next === null) {
                    // 만약 제거된 노드가 tail이었다면, tail을 업데이트합니다.
                    this.tail = prevNode;
                }
            }
        }
    }

    display() {
        // 리스트의 모든 노드 값을 문자열 형태로 출력합니다.
        let curNode = this.head;
        let displayString = '[';
        while (curNode !== null) {
            displayString += `${curNode.value}, `;
            curNode = curNode.next;
        }
        displayString = displayString.substring(0, displayString.length - 2); // 마지막 콤마를 제거합니다.
        displayString += ']';
        console.log(displayString);
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
console.log(linkedList);
