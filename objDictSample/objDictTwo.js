// 사용자 데이터와 취미 데이터 예시
const users = [
    { id: 1, name: 'Alice', hobbies: ['Reading', 'Swimming'] },
    { id: 2, name: 'Bob', hobbies: ['Cooking', 'Swimming'] },
    { id: 3, name: 'Charlie', hobbies: ['Running', 'Reading'] },
    // ... 기타 사용자 데이터
];

const hobbies = ['Reading', 'Swimming', 'Cooking', 'Running'];

// 취미별 사용자를 저장할 딕셔너리 초기화
let hobbiesDict = {};

// 취미 데이터를 순회하며 딕셔너리에 취미별 사용자 리스트 초기화
hobbies.forEach((hobby) => {
    hobbiesDict[hobby] = [];
});

// 사용자 데이터를 순회하며 각 사용자의 취미를 딕셔너리에 추가
users.forEach((user) => {
    user.hobbies.forEach((hobby) => {
        if (hobbiesDict[hobby]) {
            hobbiesDict[hobby].push(user.name);
        }
    });
});

// 취미별 사용자 목록 검색 함수
const getUsersByHobby = (hobby) => {
    return hobbiesDict[hobby] || [];
};

// 'Reading' 취미를 가진 사용자 검색
const readingUsers = getUsersByHobby('Reading');
console.log('Users who like Reading:', readingUsers); // ['Alice', 'Charlie']

// 'Swimming' 취미를 가진 사용자 검색
const swimmingUsers = getUsersByHobby('Swimming');
console.log('Users who like Swimming:', swimmingUsers); // ['Alice', 'Bob']
