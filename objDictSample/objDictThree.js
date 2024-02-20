// 객체 형태로 저장된 데이터 예시
const peopleData = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Alice', age: 28 },
    { id: 5, name: 'Bob', age: 22 },
    // ... 기타 데이터 항목
];

// 이름을 키로 사용하여 데이터를 그룹화하고 평균 나이를 계산할 딕셔너리 초기화
let nameGroups = {};

// 객체 데이터를 순회하며 딕셔너리에 그룹화 및 평균 나이 계산
peopleData.forEach((person) => {
    const { name, age } = person;
    console.log('person', person);
    if (!nameGroups[name]) {
        nameGroups[name] = { people: [], averageAge: 0 };
    }
    nameGroups[name].people.push(person);

    // 평균 나이 업데이트
    const group = nameGroups[name];
    group.averageAge = group.people.reduce((acc, curr) => acc + curr.age, 0) / group.people.length;
});

console.log('peopleData', peopleData);
// 딕셔너리에서 특정 이름 그룹의 데이터와 평균 나이 검색 예시
const searchByName = (name) => {
    return nameGroups[name] || { people: [], averageAge: 0 };
};

// 'Alice' 이름을 가진 그룹의 데이터 검색
const aliceGroup = searchByName('Alice');
console.log(aliceGroup);
/*
출력:
{
    people: [{ id: 1, name: 'Alice', age: 30 }, { id: 4, name: 'Alice', age: 28 }],
    averageAge: 29
}
*/
