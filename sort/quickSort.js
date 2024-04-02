// 분할 정복 알고리즘(pivot사용)
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        // 왼쪽 부분 배열 정렬
        quickSort(arr, left, pivotIndex - 1);
        // 오른쪽 부분 배열 정렬
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

// 예제 배열
let numbers = [5, 3, 8, 4, 23, 11, 29, 30, 51, 21];

// 삽입 정렬 실행
console.log(quickSort(numbers));
