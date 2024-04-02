class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        node.prev = this.top; // 생성한 node의 prev 포인터에 현재 top node을 저장
        this.top = node; // 현재 top을 생성한 node로 변경.
        this.size += 1;
    }

    pop() {
        const value = this.top.value; // 현재 top node의 value
        this.top = this.top.prev; // 현재 top 노드의 prev 포인터가 prev로 변경.
        this.size -= 1;
        return value;
    }

    onTop() {
        return this.top.value;
    }

    amount() {
        return this.size;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
stack.push(4);

// 쌓이는 형식이므로 next 보다는 Prev가 더 직관적으로 파악하기 쉬움.

console.log(stack.onTop());
console.log(stack.amount());
