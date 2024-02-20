'use strict';
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const person = new Person('Alice');
console.log(person.name); // 외부에서 접근 가능
person.greet(); // 외부에서 접근 가능
class Persons {
    constructor(age) {
        this.age = age;
    }
    displayAge() {
        console.log(`I am ${this.age} years old`);
    }
}
const persons = new Persons(30);
console.log(persons);
// console.log(person.age); // 오류: 'age' 속성은 private이므로 클래스 'Person' 내에서만 접근 가능
// person.displayAge(); // 오류: 'displayAge' 메서드는 private이므로 클래스 'Person' 내에서만 접근 가능
class Personss {
    constructor(id) {
        this.id = id;
    }
}
class Employee extends Personss {
    constructor(id, employeeId) {
        super(id);
        this.employeeId = employeeId;
    }
    display() {
        console.log(`My ID is ${this.id} and employee ID is ${this.employeeId}`);
    }
}
const employee = new Employee(123, 456);
// console.log(employee.id); // 오류: 'id' 속성은 protected이므로 클래스 'Person' 및 파생된 클래스 내에서만 접근 가능
employee.display(); // 내부에서 protected 멤버에 접근 가능
