// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.queue = [];
//         this.front = 0;
//         this.rear = 0;
//     }

//     enqueue(value) {
//         this.queue[this.rear++] = value;
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return undefined;
//         }
//         const value = this.queue[this.front];
//         delete this.queue[this.front++];
//         return value;
//     }

//     peek() {
//         return this.queue[this.front];
//     }

//     isEmpty() {
//         return this.size() === 0;
//     }

//     size() {
//         return this.rear - this.front;
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.tail === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        if (this.head === null) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        return value;
    }

    peek() {
        return this.head ? this.head.value : undefined;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node !== null) {
            count++;
            node = node.next;
        }
        return count;
    }
}

function solution(priorities, location) {
    let queue = new Queue();
    priorities.forEach((priority, index) => queue.enqueue({ priority, index }));

    let order = 0;

    while (!queue.isEmpty()) {
        let current = queue.dequeue();
        let node = queue.head;
        let hasHigherPriority = false;

        while (node) {
            if (node.value.priority > current.priority) {
                hasHigherPriority = true;
                break;
            }
            node = node.next;
        }

        if (hasHigherPriority) {
            queue.enqueue(current);
        } else {
            order += 1;
            if (current.index === location) {
                return order;
            }
        }
    }

    return -1;
}

function solution(priorities, location) {
    const queue = new Queue();
    //queue에 중요도를 담으면서 순서를 파악하기 위해서 중요도의 index도 같이 담습니다.
    for (let i = 0; i < priorities.length; i++) {
        queue.enqueue([priorities[i], i]);
    }
    //빠른 탐색을 위해 priorities를 정렬합니다.
    priorities.sort((a, b) => b - a);

    let count = 0;
    while (true) {
        //queue에서 값을 하나 뺍니다.
        const currentValue = queue.peek();
        //priorities[count]와 queue로 뽑은 중요도 데이터와 비교합니다.
        if (currentValue[0] < priorities[count]) {
            // priorities[count]가 더 크다면 queue 맨 뒤에 다시 넣습니다.
            queue.enqueue(queue.dequeue());
        } else {
            //priorities[count]가 더 작다면 count를 하나 더 증가시킵니다.
            const value = queue.dequeue();
            count += 1;
            //이 때 queue로 뽑은 중요도의 index와 location이 동일하다면 그대로 count를 반환
            if (location === value[1]) {
                return count;
            }
        }
    }
    return count;
}
