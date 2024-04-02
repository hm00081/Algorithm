//배열의 원소를 순서대로 탐색
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

// 예제 배열
let numbers = [5, 3, 8, 4, 2];

// 삽입 정렬 실행
console.log(insertionSort(numbers));
