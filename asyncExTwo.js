// 비동기적으로 파일을 읽는 것을 시뮬레이션하는 함수
function readFile(fileName) {
    console.log(`${fileName} read start.`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${fileName} read end.`);
            resolve(`${fileName} contents`);
        }, Math.floor(Math.random() * 2000) + 1000);
    });
}

// 여러 파일을 순차적으로 읽고 결과를 출력하는 비동기 함수
async function processFiles(fileNames) {
    for (const fileName of fileNames) {
        const fileContents = await readFile(fileName);

        console.log(`${fileName}: ${fileContents}`);
    }
}

// 파일 처리 시작
console.log('Start file processing');
processFiles(['file1.txt', 'file2.txt', 'file3.txt']);
console.log('End file processing');

//processFiles 함수 내에서 await 키워드를 사용하면 readFile 함수가 반환하는 Promise가 해결될 때까지 기다립니다.
//이를 통해 파일이 순차적으로 처리됩니다. "Start file processing"과 "End file processing"은 processFiles 함수의 호출과
//반환 사이에 동기적으로 실행되기 때문에, 파일 읽기가 시작되기 전과 후에 출력됩니다.
//비동기 작업의 경우 시작과 종료가 setTimeout에 설정된 랜덤한 지연 후에 발생하지만, 각 파일의 처리는 await에 의해 순차적으로 이루어집니다.

//순서결과ㅌ
// "Start file processing" 출력됨 (동기적으로 실행)
// "End file processing" 출력됨 (동기적으로 실행)
// "file1.txt read start." 출력됨 (비동기 시작)
// "file1.txt read end." 출력됨 (비동기 종료, 파일 읽기 완료)
// "file1.txt: file1.txt contents" 출력됨 (비동기 결과)
// "file2.txt read start." 출력됨 (비동기 시작)
// "file2.txt read end." 출력됨 (비동기 종료, 파일 읽기 완료)
// "file2.txt: file2.txt contents" 출력됨 (비동기 결과)
// "file3.txt read start." 출력됨 (비동기 시작)
// "file3.txt read end." 출력됨 (비동기 종료, 파일 읽기 완료)
// "file3.txt: file3.txt contents" 출력됨 (비동기 결과)
