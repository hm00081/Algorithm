const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);

// 최대값 찾기
const numberss = [10, 5, 100, 2, 1000];
const maxNum = numberss.reduce((acc, cur) => (acc > cur ? acc : cur), numberss[0]);
console.log(maxNum);

// 중첩 배열 펼치기
const nested = [1, [2, 3], [4, [5, [6]]]];
// 중첩이 존재하지 않을 경우
const flatten = nested.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? curr.reduce((acc, curr) => acc.concat(curr), []) : curr), []);
// 여러 중첩배열이 존재할경우
const flattenArray = (arr) => {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return acc.concat(flattenArray(cur)); // 재귀를 통해 계속 평탄화작업 진행.
        } else {
            return acc.concat(cur);
        }
    }, []);
};
const flat = flattenArray(nested);
console.log('flatten', flatten);
console.log('flat', flat);
// 중복 제거
const num = [1, 2, 3, 2, 4, 3, 5];
const unique = num.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []);
console.log('unique', unique);

// 객체 배열 속성 기준 그룹화
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 30 },
    { name: 'Jane', age: 20 },
];
const groupByAge = people.reduce((acc, person) => {
    if (!acc[person.age]) {
        acc[person.age] = [];
    }
    acc[person.age].push(person);
    // 나이가 같은 사람들의 목록을 이름 순으로 정렬
    acc[person.age].sort((a, b) => a.name.localeCompare(b.name));

    return acc;
}, {});
console.log('groupByAge', groupByAge);

// 함수 파이프라인 생성
const pipe =
    (...functions) =>
    (input) =>
        functions.reduce((acc, fn) => fn(acc), input);

const double = (x) => x * 2;
const square = (x) => x ** 2;
const doubleThenSquare = pipe(double, square);
console.log('doubleThenSquare', doubleThenSquare(3, 3));

// 깊은복사
const deepCopy = (obj) =>
    Object.keys(obj).reduce(
        (acc, key) => {
            const value = obj[key];
            acc[key] = typeof value === 'object' && value !== null ? deepCopy(value) : value;
            return acc;
        },
        Array.isArray(obj) ? [] : {}
    );
