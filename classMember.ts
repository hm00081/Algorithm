class Person {
    public name: string; // TypeScript에서의 public 선언

    constructor(name: string) {
        this.name = name;
    }

    public greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person('Alice');
console.log(person.name); // 외부에서 접근 가능
person.greet(); // 외부에서 접근 가능

class Persons {
    private age: number; // TypeScript에서의 private 선언

    constructor(age: number) {
        this.age = age;
    }

    private displayAge() {
        console.log(`I am ${this.age} years old`);
    }
}

const persons = new Persons(30);
console.log(persons);
// console.log(person.age); // 오류: 'age' 속성은 private이므로 클래스 'Persons' 내에서만 접근 가능
// person.displayAge(); // 오류: 'displayAge' 메서드는 private이므로 클래스 'Person' 내에서만 접근 가능

class Personss {
    protected id: number; // TypeScript에서의 protected 선언

    constructor(id: number) {
        this.id = id;
    }
}

class Employee extends Personss {
    private employeeId: number;

    constructor(id: number, employeeId: number) {
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
