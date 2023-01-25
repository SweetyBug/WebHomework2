function convert(value) {
    return ((9/5) * value + 32).toFixed(2);
}

const celsius = parseInt(prompt("Введите градусы цельсия: "));

const fahrenheit = convert(celsius);
printTo(celsius, fahrenheit);

function printTo(value1, value2) {
    alert("Цельсия: " + value1 + "\n" + "Фаренгейт: " + value2);
}
