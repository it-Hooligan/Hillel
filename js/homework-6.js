/*
TODO Реализовать функции в следующем примере. Необходимо дополнить только тот код которого не хватает (там где комментарии)
 Добавлю что решение надо сделать при помощи циклов, то есть пройти по всем элементам и к примеру найти меньшее из всех  */

let arr = [];
// getSimpleNumbers(2, 20);

function getSimpleNumbers(from, to) {

    lot: for (let i = from; i < to; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0)
                continue lot;
        }

        arr.push(i);
    }

    return arr;
    // Вернуть массив простых чисел
    // Наполнять массив при помощи метода push
}

function getSumOfNumbers(arr) {

    let result = 0;

    for (let key in arr) {
        result = result + arr[key];
    }

    return result;
    // Вернуть сумму всех чисел массива
}

function getAverageOfNumbers(arr) {

    let result = 0;

    for (let key in arr) {
        result = result + arr[key];
    }

    return result / arr.length;
    // Вернуть среднее арифметическое число из чисел массива
}

function minNumber(arr) {

    let minResult = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (minResult > arr[i]) {
            minResult = arr[i];
        }
    }
    return minResult;
    // Найти и вернуть минимальное число в массиве
}

function maxNumber(arr) {

    let maxResult = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxResult) {
            maxResult = arr[i];
        }
    }
    return maxResult;

    // Найти и вернуть максимальное число в массиве
}

function start() {
    const from = getUserNumberAsInteger('Диапазон от:');
    const to = getUserNumberAsInteger('Диапазон до:');

    const simpleNumbers = getSimpleNumbers(from, to);

    console.log('========================================');
    console.log(`Диапазон задан от ${from} до ${to}`);
    console.log(`Простые числа, ${simpleNumbers}`);
    // Тут вывести в консоль результаты всех остальных функций
    console.log(`Массив чисел: ${arr}`);
    console.log(`Сумма всех чисел: ${getSumOfNumbers(arr)}`);
    console.log(`Среднее арифметическое: ${getAverageOfNumbers(arr)}`);
    console.log(`Минимальное число в массиве: ${minNumber(arr)}`);
    console.log(`Максимальное число в массиве: ${maxNumber(arr)}`);


    console.log('========================================');
}

function getUserNumberAsInteger(message) {
    const userInput = prompt(message);
    return parseInt(userInput);
}
start();
// // getUserNumberAsInteger();