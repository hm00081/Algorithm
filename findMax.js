function findMax(arr) {
    // 배열이 비어있는 경우 처리
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }

    // 첫 번째 요소를 최대값으로 초기화
    let max = arr[0];

    // 배열을 순회하며 최대값 업데이트
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // 최대값 반환
    return max;
}

// 함수 테스트
const numbers = [10, 36, 54, 89, 12];
console.log(findMax(numbers)); // 89

// 초기화와 초기화된 값을 업데이트 할지말지 정하는 함수 로직을 잘 작성하자.
// Sol2 (모든 순회 배열.)
function findMaxWithDoubleLoop(arr) {
    let max = Number.NEGATIVE_INFINITY; // 최댓값을 음의 무한대로 초기화

    for (let i = 0; i < arr.length; i++) {
        let isMax = true; // 현재 요소가 최댓값인지 가정

        // 현재 요소와 배열의 모든 다른 요소를 비교
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[j] > arr[i]) {
                isMax = false; // 현재 요소보다 큰 다른 요소가 있으면, 현재 요소는 최댓값이 아님
                break; // 더 이상 비교할 필요가 없으므로 내부 반복문 종료
            }
        }

        // 현재 요소가 최댓값이면 업데이트
        if (isMax) {
            max = arr[i];
        }
    }

    return max;
}

// 함수 테스트
const numberss = [3, 6, 2, 8, 4];
console.log(findMaxWithDoubleLoop(numberss)); // 8
