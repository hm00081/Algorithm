function findUserAndCallBack(id, cb) {
    const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com',
    };
    cb(user);
}

// findUserAndCallBack(1, function (user) {
//     console.log('user:', user);
// });
// 콜백 함수를 넣음에 따라 함수 내부에서 수행해주 때문에 결과값을 return 할 필요가 없다!!!

function findUser(id) {
    let user;
    setTimeout(function () {
        console.log('waited 0.1 sec.');
        user = {
            id: id,
            name: 'User' + id,
            email: id + '@test.com',
        };
    }, 100);
    return user;
}

const user = findUser(1);
console.log('console user:', user);
// user: undefined
// setTimeout은 비동기 함수이므로, 실행 완료를 기다리지 않고
// user 객체는 무시하고 넘어가게됨. 따라서 user는 undefined 할당.
// 출처: https://velog.io/@ko1586/Callback%ED%95%A8%EC%88%98%EB%9E%80-%EB%AD%94%EB%8D%B0
