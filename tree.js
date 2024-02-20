class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// 프리오더 순회 (Root, Left, Right)
function preorderTraversal(root) {
    if (root === null) {
        return;
    }

    console.log(root.data); // 루트 노드 처리
    preorderTraversal(root.left); // 왼쪽 하위 트리 순회
    preorderTraversal(root.right); // 오른쪽 하위 트리 순회
}

// 인오더 순회 (Left, Root, Right)
function inorderTraversal(root) {
    if (root === null) {
        return;
    }

    inorderTraversal(root.left); // 왼쪽 하위 트리 순회
    console.log(root.data); // 루트 노드 처리
    inorderTraversal(root.right); // 오른쪽 하위 트리 순회
}

// 포스트오더 순회 (Left, Right, Root)
function postorderTraversal(root) {
    if (root === null) {
        return;
    }

    postorderTraversal(root.left); // 왼쪽 하위 트리 순회
    postorderTraversal(root.right); // 오른쪽 하위 트리 순회
    console.log(root.data); // 루트 노드 처리
}

// 이진 트리 생성
const root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.left = new TreeNode('F');

// 프리오더 순회 출력
console.log('Preorder Traversal:');
preorderTraversal(root);

// 인오더 순회 출력
console.log('Inorder Traversal:');
inorderTraversal(root);

// 포스트오더 순회 출력
console.log('Postorder Traversal:');
postorderTraversal(root);
