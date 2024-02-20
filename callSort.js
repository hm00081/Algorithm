class Animal {
    constructor() {
        console.log('Animal constructor'); // 호출 안되서 안나옴
    }

    makeSound() {
        console.log('Some sound');
    }
}

class Dog extends Animal {
    constructor() {
        super(); // 부모 클래스의 생성자(constructor) 호출
        console.log('Dog constructor');
    }

    makeSound() {
        super.makeSound(); // 부모 클래스의 makeSound 호출
        console.log('Bark');
    }
}

const myDog = new Dog(); // Animal constructor, Dog constructor, 생성자만 호출함. 메서드는 호출안해서 안나옴.
myDog.makeSound(); // Some sound, Bark

//호출순서
//Animal constructor
//Dog constructor
//Some sound
//Bark

// 클래스 자체로는 호출이 안됨, 새로 클래스 객체 생성(myDog) 시 해당 구조들이 일어나는 형태라고 이해하면 된다.

// new Dog()를 실행하여 Dog 클래스의 인스턴스를 생성합니다.
// Dog 클래스의 생성자 내에서 super()를 호출하여 부모 클래스인 Animal의 생성자를 실행합니다.
// 이 때 Animal constructor가 콘솔에 출력됩니다.
// Animal의 생성자 실행이 완료된 후, Dog 클래스의 생성자의 나머지 부분이 실행됩니다.
// 이 때 Dog constructor가 콘솔에 출력됩니다.
// 인스턴스 생성이 완료되고 myDog.makeSound()를 호출합니다.
// Dog 클래스의 makeSound 메서드 내에서 super.makeSound()를 통해 Animal 클래스의 makeSound 메서드를 호출합니다.
// 이 때 Some sound가 콘솔에 출력됩니다.
// super.makeSound() 호출 이후 Dog 클래스의 makeSound 메서드의 나머지 부분이 실행됩니다.
// 이 때 Bark가 콘솔에 출력됩니다.
