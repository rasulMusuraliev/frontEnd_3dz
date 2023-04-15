function calculator(num1, operator, num2) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "На ноль делить нельзя";
            }
            break;
        default:
            result = "ERROR!";
    }

    return result;
}

let num1 = +prompt("Введите первое число: ");
let operator = prompt("Введите оператор (+, -, *, /): ");
let num2 = +prompt("Введите второе число: ");

let result = calculator(num1, operator, num2);
console.log(`Результат: ${result}`);