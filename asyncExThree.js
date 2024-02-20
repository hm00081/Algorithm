const fs = require('fs').promises; // Node.js의 파일 시스템 프로미스 API

async function readFileContents(filename) {
    console.log(`${filename} read start.`);
    const contents = await fs.readFile(filename, 'utf-8'); // 파일을 읽는 비동기 작업
    console.log(`${filename} read end.`);
    return `${filename}: ${contents}`;
}

async function processFiles() {
    console.log('Start file processing');

    const file1 = readFileContents('file1.txt');
    const file2 = readFileContents('file2.txt');
    const file3 = readFileContents('file3.txt');

    console.log('End file processing');

    console.log(await file1);
    console.log(await file2);
    console.log(await file3);
}

processFiles();
