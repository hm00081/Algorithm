// 노드 클래스 정의: 연결 리스트의 각 요소(노드), 클래스는 객체를 생성하기 위한 템플릿
class Node {
    constructor(data, next = null) {
        this.data = data; // 노드가 저장할 데이터
        this.next = next; // 다음 노드를 가리키는 포인터, 기본값은 null
    }
}
// constructor: 객체를 생성할 때 자동으로 호출되는 특별한 메서드
// 이 메서드는 객체의 초기 상태를 설정하는 데 사용되며, 객체에 필요한 초기 데이터나
// 상태를 설정하는 초기화 코드를 포함되며 생성자는 클래스 내에서 단 한 번만 정의할
// 수 있으며, 생성자를 생략하면 클래스에 기본 생성자가 자동으로 포함

// 연결 리스트 클래스 정의
class LinkedList {
    constructor() {
        this.head = null; // 리스트가 비어 있으므로 head는 null입니다.
        this.size = 0; // 노드가 없으므로 size는 0
    }

    // 리스트의 시작 부분에 노드 삽입
    insertFirst(data) {
        this.head = new Node(data, this.head); // 새 노드를 생성하고, 현재 헤드를 새 노드의 next로 설정
        this.size++; // 리스트 크기 증가
    }

    // 리스트의 끝 부분에 노드 삽입
    insertLast(data) {
        let node = new Node(data); // 새 노드 생성
        if (!this.head) {
            this.head = node; // 리스트가 비어있으면 새 노드를 헤드로 설정
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // 마지막 노드를 찾기 위해 리스트를 순회
            }
            current.next = node; // 마지막 노드의 next로 '새 노드'를 설정
        }
        this.size++; // 리스트 크기 증가
    }

    // 중간에 노드 삽입
    insertAt(data, index) {
        // 인덱스가 범위를 벗어나면 삽입하지 않습니다.
        if (index < 0 || index > this.size) return;

        // 첫 번째 위치에 삽입하는 경우
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data); // 삽입할 새 노드 생성
        let current = this.head; // 현재 노드를 가리키는 포인터
        let previous; // 이전 노드를 가리키는 포인터
        let count = 0;

        // 삽입할 위치의 바로 이전 노드까지 이동합니다.
        while (count < index) {
            previous = current; // 이전 노드를 현재 노드로 설정
            current = current.next; // 현재 노드를 다음 노드로 이동
            count++;
        }

        node.next = current; // 새 노드의 next를 현재 노드로 설정
        previous.next = node; // 이전 노드의 next를 새 노드로 설정
        this.size++; // 리스트 크기를 1 증가시킵니다.
    }

    // 지정된 인덱스의 노드 데이터 출력
    getAt(index) {
        let current = this.head;
        let count = 0;

        // 지정된 인덱스까지 리스트를 순회
        while (current) {
            if (count === index) {
                console.log('getAtData', current.data); // 데이터 출력
                return;
            }
            count++;
            current = current.next;
        }
        console.log('Index out of bounds'); // 인덱스가 범위를 벗어난 경우
    }

    // 중간에 노드 삭제
    removeAt(index) {
        // 인덱스가 범위를 벗어나면 삭제하지 않습니다.
        if (index < 0 || index >= this.size) return;

        let current = this.head; // 현재 노드를 가리키는 포인터
        let previous; // 이전 노드를 가리키는 포인터
        let count = 0;

        // 첫 번째 노드를 삭제하는 경우
        if (index === 0) {
            this.head = current.next; // head를 다음 노드로 이동
        } else {
            // 삭제할 위치의 바로 이전 노드까지 이동합니다.
            while (count < index) {
                count++;
                previous = current; // 이전 노드를 현재 노드로 설정
                current = current.next; // 현재 노드를 다음 노드로 이동
            }
            previous.next = current.next; // 이전 노드의 next를 삭제할 노드의 다음 노드로 설정하여 연결을 끊습니다.
        }
        this.size--; // 리스트 크기를 1 감소시킵니다.
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.next; // 다음 노드 저장
            current.next = prev; // 현재 노드의 next를 이전 노드로 변경
            prev = current; // 이전 노드를 현재 노드로 업데이트
            current = next; // 현재 노드를 다음 노드로 업데이트
        }
        this.head = prev; // 헤드를 업데이트
    }

    // 연결 리스트에서 루프를 찾는 함수
    detectLoop() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next; // 느린 포인터는 한 칸씩 이동
            fast = fast.next.next; // 빠른 포인터는 두 칸씩 이동
            if (slow === fast) {
                console.log('Loop detected');
                return true; // 루프 발견
            }
        }
        console.log('No loop detected');
        return false; // 루프 미발견
    }

    // 리스트의 모든 노드 제거
    clearList() {
        this.head = null; // 헤드를 null로 설정하여 리스트 비움
        this.size = 0; // 크기를 0으로 설정
    }

    // 리스트의 모든 데이터를 순서대로 출력
    printListData() {
        let current = this.head; // 현재 노드를 헤드로 설정
        while (current) {
            console.log(current.data); // 현재 노드의 데이터 출력
            current = current.next; // 다음 노드로 이동
        }
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next; // 다음 노드 임시 저장
        current.next = prev; // 현재 노드의 다음을 이전 노드로 변경
        prev = current; // 이전 노드를 현재 노드로 업데이트
        current = next; // 현재 노드를 다음 노드로 업데이트
    }
    head = prev; // 헤드 업데이트
    return head;
}

const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertLast(400); // 마지막 위치에 노드 삽입
linkedList.insertAt(500, 2); // 인덱스 2에 노드 삽입

// 연결 리스트 역순으로 만들기
linkedList.reverse();
console.log('Reversed Linked List:');
linkedList.printListData();

// 루프 탐지
linkedList.detectLoop();

linkedList.removeAt(3); // 인덱스 3의 노드 제거

console.log('Linked List Contents:');
linkedList.printListData(); // 연결 리스트의 모든 데이터 출력

console.log('Data at index 2:');
linkedList.getAt(2); // 인덱스 2의 데이터 출력

// 최종 연결 리스트 구조를 출력하여 확인
console.log('Final Linked List Structure:');
console.log(linkedList);
