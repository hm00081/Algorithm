let hashMap = new Map();

// 데이터 삽입
hashMap.set('key1', 'value1');
hashMap.set('key2', 'value2');
hashMap.set('key3', 'value3');

// 데이터 접근
console.log(hashMap.get('key1')); // 'value1'
console.log(hashMap.get('key2')); // 'value2'

// 데이터 존재 여부 확인
console.log(hashMap.has('key3')); // true
console.log(hashMap.has('key4')); // false

// 데이터 삭제
hashMap.delete('key3'); // 삭제.

// 전체 데이터 순회
hashMap.forEach((value, key) => {
    console.log(`순회 ${key}: ${value}`);
});

console.log(hashMap);
