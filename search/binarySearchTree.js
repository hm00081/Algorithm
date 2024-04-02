// 노드 클래스 정의: 트리의 각 노드를 나타냅니다.
class Node {
    constructor(value) {
        this.value = value; // 노드에 저장된 값
        this.left = null; // 왼쪽 자식 노드를 가리키는 포인터
        this.right = null; // 오른쪽 자식 노드를 가리키는 포인터
    }
}

// 이진 탐색 트리 클래스 정의
class BinarySearchTree {
    constructor() {
        this.root = null; // 트리의 루트 노드
    }

    // 값을 트리에 삽입하는 메서드
    insert(value) {
        const newNode = new Node(value); // 새 노드 생성
        if (this.root === null) {
            // 루트가 비어있으면 새 노드를 루트로 설정
            this.root = newNode;
            return;
        }

        let currentNode = this.root; // 현재 노드를 루트로 설정
        while (true) {
            if (value < currentNode.value) {
                // 삽입하려는 값이 현재 노드의 값보다 작으면
                if (currentNode.left === null) {
                    // 왼쪽 자식이 없으면 새 노드를 왼쪽 자식으로 설정
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left; // 왼쪽 자식으로 이동
            } else {
                // 삽입하려는 값이 현재 노드의 값보다 크거나 같으면
                if (currentNode.right === null) {
                    // 오른쪽 자식이 없으면 새 노드를 오른쪽 자식으로 설정
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right; // 오른쪽 자식으로 이동
            }
        }
    }

    // 트리에 특정 값이 존재하는지 확인하는 메서드
    has(value) {
        let currentNode = this.root; // 현재 노드를 루트로 설정
        while (currentNode !== null) {
            // 현재 노드가 null이 아닐 때까지 반복
            if (value === currentNode.value) {
                // 찾는 값이 현재 노드의 값과 일치하면 true 반환
                return true;
            }
            if (value < currentNode.value) {
                // 찾는 값이 현재 노드의 값보다 작으면 왼쪽으로 이동
                currentNode = currentNode.left;
            } else {
                // 찾는 값이 현재 노드의 값보다 크면 오른쪽으로 이동
                currentNode = currentNode.right;
            }
        }
        return false; // 트리에 값이 존재하지 않으면 false 반환
    }
}
