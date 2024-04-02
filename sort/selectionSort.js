// 최대, 최소 찾아 현 위치와 교환
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // 현재 위치를 i로 설정하고, 최소값의 위치를 저장할 변수를 선언
        let minIndex = i;
        // 현재 위치 이후의 배열에서 최소값의 위치를 찾음
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                console.log('minIndex', arr[minIndex], minIndex);
            }
        }
        // 현재 위치의 요소와 최소값의 요소를 교환
        if (i !== minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        console.log('arr', arr, i);
    }

    return arr;
}

// 예제 배열
let numbers = [64, 34, 25, 12, 22, 11, 90];

// 선택 정렬 실행
console.log(selectionSort(numbers));
