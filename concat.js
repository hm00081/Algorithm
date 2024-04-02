const numbers = [1, 2];
const letters = ['a', 'b'];
const symbols = ['!', '@'];
const combined = numbers.concat(letters, symbols);

console.log(combined); // [1, 2, "a", "b", "!", "@"]

const nested = [1, [2, 3], [4, [5, 6]]];

const nestedArray = (arr) => {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return acc.concat(nestedArray(cur));
        } else {
            return acc.concat(cur);
        }
    }, []);
};

const result = nestedArray(nested);
console.log(result);
