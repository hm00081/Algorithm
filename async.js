// async function f() {
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => console.log('Finish'));
//     });
// // await는 Promise가 처리될 때 까지 함수 실행을 기다리게 함
//     let result = await promise;
//     //let result = promise;
//     console.log(result);
// }

// f();

function fetchData(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch((error) => console.error('Fetch error:', error));
}

// 사용 예
fetchData('https://api.example.com/data')
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

async function asyncFetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// 사용 예
asyncFetchData('https://api.example.com/data');
