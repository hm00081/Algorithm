// // ES5 상속 구현
// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(`${this.name} makes a noise.`);
// };

// function Dog(name) {
//     Animal.call(this, name); // Animal의 생성자를 호출하여 Dog 인스턴스 초기화
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.speak = function() {
//     console.log(`${this.name} barks.`);
// };

// const dog = new Dog('Rex');
// dog.speak(); // "Rex barks."

// ES6 클래스 상속 구현
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
} // Dog is a type of Animal
// Animal: Base class, Dog: 파생 class

const dog = new Dog('Rex');
dog.speak(); // "Rex barks."
const dogTwo = new Animal('Snoopy');
dogTwo.speak(); // "Snoopy makes a noise."
