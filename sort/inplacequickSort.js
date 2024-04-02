function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // 분할: 피벗을 기준으로 배열을 두 부분으로 나눔
        let pivotIndex = partition(arr, low, high);

        // 정복: 분할된 각 부분에 대해 재귀적으로 정렬 수행
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // 피벗보다 작은 요소를 왼쪽으로 이동
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // 피벗을 올바른 위치로 이동
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // 피벗의 인덱스 반환
}

// 예제 배열
let numbers = [10, 7, 8, 9, 1, 5];
quickSort(numbers);
console.log(numbers);
