function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
    // while 루프는 지정된 시간(ms) 동안 계속 실행되며,
    // 이 동안은 다른 JavaScript 코드가 실행될 수 없습니다.
    // 이는 JavaScript가 단일 스레드 환경에서 실행되기 때문입니다.
}

let hello = async function () {
    sleep(3000); // CPU 차단하는 동기적 함수
    let a = () => {
        console.log('async');
    };
    a();
    let b = 0;
    for (let i = 0; i < 10; i++) {
        b += i;
    }
    console.log('b', b);
    return b;
}; // Promise 반환

//이 코드에서 await b는 의미가 없습니다. 왜냐하면 b는 단순히 숫자 값을 나타내는 변수이고, Promise가 아니기 때문입니다. 그럼에도 불구하고 await을 사용하면 JavaScript 엔진은 b를 즉시 해결된 Promise로 간주하고, 이를 비동기적으로 처리하려고 시도합니다.

async function logItems() {
    let resultItems = hello();
    //let test = hello; // 함수 그자체를 호출해야함. 이러면 함수정보만 나옴
    console.log('in', resultItems);
    // console.log('test', test); // AsyncFunction
    return resultItems;
} // await를 사용하지 않아 즉시 Promise 반환

logItems();
//1) logItems 호출되어 hello 함수 실행되지만, sleep 함수로 인해
// 이벤트 루프 차단
//2) sleep 함수 완료 후, hello 함수 내부 a 함수 실행
//3) for문 돌며 콘솔 45 실행
//4) hello함수가 Promise 반환하고, logItems 함수 내
// resultItems의 객체 할당. resultItems는 Promise 객체므로
// in Promise 콘솔 출력
//5_ 마지막 haha 출력
console.log('haha');

//코드의 실행 순서는 다음과 같습니다:
// logItems 호출
// hello 함수 호출 -> sleep 함수로 인해 3초 동안 차단
// 'async' 출력 (hello 내의 a() 함수)
// 'b 45' 출력 (hello 내의 for 루프 이후)
// 'in [object Promise]' 출력 (logItems 내에서 resultItems 로깅)
// 'haha' 출력 (logItems 호출 후)
// hello 함수의 Promise가 최종적으로 해결됨 (하지만 이 코드에서는 이를 처리하는 로직이 없음)
