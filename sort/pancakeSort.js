function flip(arr, i) {
    let start = 0;
    while (start < i) {
        [arr[start], arr[i]] = [arr[i], arr[start]];
        start++;
        i--;
    }
}

function findMax(arr, n) {
    let mi = 0;
    for (let i = 0; i < n; i++) if (arr[i] > arr[mi]) mi = i;
    return mi;
}

function pancakeSort(arr, n) {
    for (let curr_size = n; curr_size > 1; --curr_size) {
        let mi = findMax(arr, curr_size);
        if (mi !== curr_size - 1) {
            flip(arr, mi);
            flip(arr, curr_size - 1);
        }
    }
}

// 예제 배열
let arr = [23, 10, 20, 11, 12, 6, 7];
pancakeSort(arr, arr.length);

console.log('Sorted Array: ', arr);
