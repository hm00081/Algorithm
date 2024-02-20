const a = { one: 1, two: 2 };
//let b = a; // 참조 할당, 얕은 복사 아님.
let c = { ...a }; // Spread 연산자를 사용하여 a 객체를 얕은 복사하여 b에 할당
//let c = Object.assign({}, a);
//b.one = 3; // b를 통해 복사된 객체를 수정
console.log(c);
c.one = 5;

console.log(a); // { one: 3, two: 2 } - 원본 객체는 변경되지 않음
//console.log(b); // { one: 3, two: 2 } - 복사된 객체는 변경됨
console.log(c); // { one: 5, two: 2 } - 복사된 객체는 변경됨
//이 코드에서 a의 값이 변하는 이유는 JavaScript에서 객체가 참조 타입(reference type)이기 때문입니다.
//a는 객체 { one: 1, two: 2 }를 참조하고 있고, b에 a를 할당할 때, b도 같은 객체를 참조하게 됩니다.
//따라서, b.one = 3;를 실행하면, b가 참조하는 객체의 one 속성 값을 3으로 변경합니다. a와 b가 동일한 객체를 참조하고 있으므로, a를 통해서 객체를 조회할 때도 one 속성의 값이 3으로 변경된 것을 볼 수 있습니다.
//이러한 동작은 객체와 같은 참조 타입의 특성에서 비롯됩니다. 참조 타입의 변수는 실제 데이터를 직접 저장하는 것이 아니라, 데이터가 저장된 메모리의 주소를 저장합니다. 따라서, 한 변수가 참조하는 객체를 다른 변수에 할당하면, 두 변수는 같은 메모리 주소, 즉 같은 객체를 가리키게 됩니다. 이로 인해 한 변수를 통해 객체를 수정하면, 다른 변수를 통해서도 그 변경 사항을 볼 수 있습니다.

// slice : 얕은복사 대표적 예
const original = [{ a: 1, b: 2 }, true];
const copy = original.slice();
console.log(copy);
console.log(JSON.stringify(original) === JSON.stringify(copy)); // true // 복사된 배열에만 변경.
copy[0].a = 99;
copy[1] = false;
console.log(JSON.stringify(original) === JSON.stringify(copy)); // false
console.log(original); // [ { a: 99, b: 2 }, true ]
console.log(copy); // [ { a: 99, b: 2 }, false ]

//얕은 복사는 객체의 참조값(주소 값)을 복사하고, 깊은 복사는 객체의 실제 값을 복사
//...props <= spread 연산자도 얕은복사
