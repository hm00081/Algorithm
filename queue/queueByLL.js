class Node {
    constructor(value) {
        this.value = value; // 노드가 저장하고 있는 값
        this.next = null; // 다음 노드를 가리키는 포인터
    }
}

class Queue {
    constructor() {
        this.head = null; // 큐의 앞부분을 가리키는 포인터
        this.tail = null; // 큐의 뒷부분을 가리키는 포인터
        this.size = 0; // 큐에 저장된 요소의 수
    }

    enqueue(newValue) {
        const newNode = new Node(newValue); // 새 노드 생성
        if (this.head === null) {
            // 큐가 비어있으면 head와 tail 모두 새 노드를 가리킴
            this.head = this.tail = newNode;
        } else {
            // 큐가 비어있지 않으면, tail의 next를 새 노드로 설정하고 tail 업데이트
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1; // 큐의 크기 1 증가
    }

    dequeue() {
        if (!this.head) return null; // 큐가 비어있다면 null 반환
        const value = this.head.value; // head의 값을 추출
        this.head = this.head.next; // head를 다음 노드로 이동
        if (!this.head) {
            this.tail = null; // 큐가 비어졌다면 tail도 null로 설정
        }
        this.size -= 1; // 큐의 크기 1 감소
        return value; // 제거된 요소의 값을 반환
    }

    peek() {
        //head 값 반환
        if (!this.head) return null; // 큐가 비어있다면 null 반환
        return this.head.value; // head의 값, 즉 큐의 첫 번째 요소 반환
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.dequeue();
queue.enqueue(7);
queue.peek();
console.log(queue);
// shift, unshift 로는 큐 쓰지말자.
// shift는 선형시간 걸려서 큐에서 기대하는 로직 실행되지않음
