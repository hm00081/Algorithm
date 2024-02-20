const person = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};

person.greet();
// "Hello, my name is Alice"
// `this`는 person 객체를 가리킵니다.

const greetFunction = person.greet;
greetFunction();
// "Hello, my name is undefined"
// `this`는 전역 객체(브라우저에서는 window)를 가리킵니다.
// strict mode에서는 `undefined`.
