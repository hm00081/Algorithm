// 객체 형태로 저장된 데이터 예시
const data = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    // ... 기타 데이터 항목
];

// 해시테이블을 사용하여 데이터를 저장할 배열 사전 초기화
let hashTable = {};

// 객체 데이터를 순회하며 해시테이블에 저장
data.forEach((item, i) => {
    const key = item.id; // 해시테이블의 키를 객체의 'id' 속성으로 사용
    hashTable[key] = item; // 해당 키에 해당하는 객체를 해시테이블에 저장
});

console.log(hashTable);

// 해시테이블에서 데이터 검색 예시
const searchById = (id) => {
    return hashTable[id]; // 주어진 'id'를 키로 사용하여 데이터 검색
};

// id가 2인 데이터 검색
const item = searchById(2);
console.log(item); // { id: 2, name: 'Bob', age: 25 } 출력
