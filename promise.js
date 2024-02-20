class Semaphore {
    constructor(count) {
        this.count = count;
        this.waiting = [];
    }

    acquire() {
        if (this.count > 0) {
            this.count -= 1;
            return Promise.resolve(true); // 즉시 Promise 객체 반환
        }
        // 세마포어가 0이면, 대기열에 Promise를 추가합니다.
        let resolve;
        let promise = new Promise((r) => (resolve = r));
        this.waiting.push(resolve);
        return promise;
    }

    release() {
        if (this.waiting.length > 0) {
            // 대기열에 있는 프로미스 중 하나를 깨웁니다.
            const resolve = this.waiting.shift();
            resolve(true);
        } else {
            this.count += 1;
        }
    }
}

const semaphore = new Semaphore(2); // 동시에 두 개의 자원에만 접근 가능

async function task(name) {
    await semaphore.acquire();
    console.log(`${name} started task`);
    // 임의의 비동기 작업을 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 1000)));
    console.log(`${name} finished task`);
    semaphore.release();
}

// 동시에 여러 작업을 시작합니다.
task('Task 1');
task('Task 2');
task('Task 3');
