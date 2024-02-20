function quickSort(arr, left = 0, right = null) {
    if (right === null) {
        right = arr.length - 1;
    }

    if (left < right) {
        let pivotIndex = partition(arr, left, right);

        // 피벗 왼쪽 부분 배열 정렬
        quickSort(arr, left, pivotIndex - 1);

        // 피벗 오른쪽 부분 배열 정렬
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

// pivot 을 왼쪽으로
function partition(arr, left, right) {
    let pivot = arr[left]; // 배열의 가장 왼쪽 요소를 피벗으로 선택
    let i = left + 1; // i를 left + 1로 초기화
    console.log('arr left & right', arr[left], arr[right]);
    for (let j = left + 1; j <= right; j++) {
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // 스와프
            i++;
        }
    }

    // 피벗을 올바른 위치로 이동
    [arr[left], arr[i - 1]] = [arr[i - 1], arr[left]];
    return i - 1; // 새로운 피벗 인덱스 반환
}

// pivot을 오른쪽으로
// function partition(arr, left, right) {
//     let pivot = arr[right]; // 배열의 가장 오른쪽 요소를 피벗으로 선택
//     let i = left - 1;

//     for (let j = left; j < right; j++) {
//         if (arr[j] <= pivot) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]]; // 스와프
//         }
//     }

//     // 피벗을 올바른 위치로 이동
//     [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
//     return i + 1; // 피벗 인덱스 반환
// }

// 예제 사용 및 분할 과정 출력
function quickSortWithPrint(arr, left = 0, right = null) {
    if (right === null) {
        right = arr.length - 1;
    }

    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        console.log(`Partitioning with pivot ${arr[pivotIndex]} at index ${pivotIndex}:`, arr);

        // 피벗 왼쪽 부분 배열 정렬
        quickSortWithPrint(arr, left, pivotIndex - 1);

        // 피벗 오른쪽 부분 배열 정렬
        quickSortWithPrint(arr, pivotIndex + 1, right);
    }
}

const arr = [5, 2, 9, 7, 3, 1, 6];
// console.log('Initial array:', arr);
quickSortWithPrint(arr);
// console.log('Sorted array:', arr);
