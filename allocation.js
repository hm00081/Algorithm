// stack은 LIFO 형태의 자료구조

// 정적할당
class StaticStack {
    constructor(capacity) {
        //constructor를 사용해 생성된 결과는 객체이다!
        this.capacity = capacity; // stack 고정크기
        this.stack = new Array(capacity); // 고정크기 배열을 스택구현
        this.top = -1;
    }

    push(item) {
        if (this.top < this.capacity - 1) {
            this.stack[++this.top] = item;
        } else {
            console.log('Stack overflow');
        }
    }

    pop() {
        if (this.top >= 0) {
            return this.stack[this.top--];
        } else {
            console.log('Stack underflow');
            return null;
        }
    }
}

const staticStack = new StaticStack(3);
staticStack.push(1);
staticStack.push(2);
staticStack.push(3);
staticStack.push(4);
console.log(staticStack);
console.log(staticStack.pop());

// 동적할당

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class DynamicLinkedList {
    constructor() {
        this.head = null; // 연결 리스트의 시작
    }

    insert(data) {
        let newNode = new Node(data, this.head);
        this.head = newNode; // 새 노드를 리스트의 시작에 추가
    }

    remove() {
        if (this.head !== null) {
            this.head = this.head.next; // 첫 번째 노드 제거
        }
    }
}

// 사용 예
const dynamicList = new DynamicLinkedList();
dynamicList.insert(1);
dynamicList.insert(2);
dynamicList.remove();

// 자동할당

function automaticAllocationExample() {
    let localVariable = 'I am a local variable'; // 지역 변수에 자동 할당
    console.log(localVariable);
}

automaticAllocationExample(); // "I am a local variable" 출력

// 함수 실행이 끝난 후, localVariable에 할당된 메모리는 자동으로 해제됩니다.
