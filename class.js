class Car {
    constructor(brand, price, place) {
        this.brand = brand;
        this.price = price;
        this.place = place;
    }
}

// 'Car' 클래스의 인스턴스를 생성
const myCar = new Car('Toyota', 20000, 'Japan');
console.log(myCar.brand); // 'Toyota'
console.log(myCar.price); // 20000
console.log(myCar.place); // 'Japan'
