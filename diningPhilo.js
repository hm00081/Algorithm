class Semaphore {
    constructor(count) {
        this.count = count;
        this.waiting = [];
        this.mutex = Promise.resolve();
    }

    acquire() {
        if (this.count > 0) {
            this.count -= 1;
            return Promise.resolve(true);
        }
        // 현재 포크를 얻을 수 없으면, 대기 큐에 Promise를 추가합니다.
        let resolve;
        let promise = new Promise((r) => (resolve = r));
        this.waiting.push(resolve);
        return promise;
    }

    release() {
        this.count += 1;
        if (this.waiting.length > 0) {
            // 대기중인 철학자가 있다면 하나를 깨웁니다.
            let resolve = this.waiting.shift();
            resolve(true);
        }
    }

    async criticalSection(taskFn) {
        await this.acquire();
        try {
            return await taskFn();
        } finally {
            this.release();
        }
    }
}

// 포크 클래스 (세마포어를 활용)
class Fork extends Semaphore {
    constructor() {
        super(1);
    }
}

// 철학자 클래스
class Philosopher {
    constructor(name, leftFork, rightFork) {
        this.name = name;
        this.leftFork = leftFork;
        this.rightFork = rightFork;
    }

    async think() {
        console.log(`${this.name} is thinking.`);
        await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 1000)));
    }

    async eat() {
        console.log(`${this.name} started eating.`);
        await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 1000)));
        console.log(`${this.name} finished eating.`);
    }

    async dine() {
        while (true) {
            await this.think();
            await this.leftFork.criticalSection(async () => {
                await this.rightFork.criticalSection(async () => {
                    await this.eat();
                });
            });
        }
    }
}

// 철학자들과 포크들을 생성
const forks = Array.from({ length: 5 }, () => new Fork());
const philosophers = [
    new Philosopher('Aristotle', forks[0], forks[1]),
    new Philosopher('Plato', forks[1], forks[2]),
    new Philosopher('Socrates', forks[2], forks[3]),
    new Philosopher('Descartes', forks[3], forks[4]),
    new Philosopher('Kant', forks[4], forks[0]),
];

// 모든 철학자가 동시에 식사를 시작
philosophers.forEach((philosopher) => philosopher.dine());
