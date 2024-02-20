class Vehicle {
    // 부모 클래스
    //constructor 함수는 클래스의 새 인스턴스를 생성할 때 호출되며, 인스턴스의 초기 속성을 설정하는 데 사용
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`Starting the ${this.brand}.`);
    }
}

class Car extends Vehicle {
    // 자식 클래스
    start() {
        super.start(); // 부모 클래스의 메서드 호출
        console.log(super.brand); // undefined, 메서드 호출만 할 뿐 따로 불러오는건 아님.
        console.log(`${this.brand} car started.`);
    }
}

const myCar = new Car('Toyota');
myCar.start();
