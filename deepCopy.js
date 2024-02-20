const object = { a: 'a', number: { one: 1, two: 2 }, arr: [1, 2, [3, 4]] };
function deepCopy(object) {
    if (object === null || typeof object !== 'object') {
        return object;
    } // 객체인지 배열인지 판단
    const copy = Array.isArray(object) ? [] : {};
    for (let key of Object.keys(object)) {
        copy[key] = deepCopy(object[key]);
    }
    return copy;
}
const copy = deepCopy(object);
copy.number.one = 3;
copy.arr[2].push(5);
console.log(object === copy); // false
console.log(object.number.one === copy.number.one); // false
console.log(object.arr === copy.arr); // false
console.log(object); // { a: 'a', number: { one: 1, two: 2 }, arr: [ 1, 2, [ 3, 4 ] ] }
console.log(copy); // { a: 'a', number: { one: 3, two: 2 }, arr: [ 1, 2, [ 3, 4, 5 ] ] }

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

const fruitss = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 0, 'Lemon', 'Kiwi');
fruitss.splice(2, 1, 'Lemon', 'Kiwi');

console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
console.log(fruitss); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango']

// JSON.stringfy: 객체를 JSON으로 변환
// JSON.parse: JSON을 객체로 벼노한
