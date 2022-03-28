// Functions: three ways

// function declaration
function numbers(number1, number2) {
    const squar1 = number1 * number1;
    const squar2 = number2 * number2;
    const total = squar1 + squar2;
    const sum = total * total;
    return sum;
}
console.log(numbers(2, 4)); // 400 test the result

// function expression
const add = function(number1, number2) {
    const squar1 = number1 * number1;
    const squar2 = number2 * number2;
    const total = squar1 + squar2;
    const sum = total * total;
    return sum;
};

console.log(add(6, 7)); // 7225 test the result

// arrow function
const calculate = (number1, number2) => {
    const squar1 = number1 * number1;
    const squar2 = number2 * number2;
    const total = squar1 + squar2;
    const sum = total * total;
    return sum;
};
console.log(calculate(9, 10)); // 32761 test the result