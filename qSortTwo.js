function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, left, right) {
    let pivot = arr[left]; // 배열의 가장 왼쪽 요소를 피벗으로 선택
    let low = left + 1; // low는 pivot의 바로 다음 위치에서부터 시작
    let high = right; // high는 전달된 끝지점에서 시작

    while (low <= high) {
        // pivot보다 작은 값이 나올 때까지 low 이동
        while (low <= right && arr[low] < pivot) low++;
        // pivot보다 큰 값이 나올 때까지 high 이동
        while (high >= left && arr[high] > pivot) high--;

        // low와 high가 중단된 지점이 서로 위치가 역전된 지점이 아니라면 스와프
        if (low <= high) {
            swap(arr, low, high);
            low++;
            high--;
        }
    }

    // 피벗과 high 위치 교환
    swap(arr, left, high);

    return high; // 피벗 위치 반환
}

function quickSort(arr, left = 0, right = null) {
    if (right === null) {
        right = arr.length - 1;
    }

    if (left < right) {
        let pivotIndex = partition(arr, left, right);

        // 피벗을 기준으로 왼쪽 부분 배열 정렬
        quickSort(arr, left, pivotIndex - 1);

        // 피벗 기준으로 오른쪽 부분 배열 정렬
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

// 예제 사용
const arr = [5, 2, 9, 7, 3, 1, 6];
console.log('Initial array:', arr);
quickSort(arr);
console.log('Sorted array:', arr);

//이해하기 빡시니 계속 머리속에 넣자
