//TODO Написать 3 функции:

// Должна принимать на вход число, и возвращать булевое значение TRUE если число простое и FALSE в противном варианте
// Написать функцию, которая будет принимать на вход 2 числа. Эти числа являются диапазоном поиска простых чисел. Необходимо в этом диапазоне найти все простые числа и вывести в консоль. Искать при помощи первой функции.
// Написать функцию, которая принимает на вход 1 число, и возвращает следующее простое число после переданного. То есть если в функцию передать число 9, то функция вернет число 11. Если передать 120, то вернет 127, и так далее.

// Задание можно сделать одним фидлом, не разбивая на отдельные куски


//Task1 
console.log(checkPrime(9));

//Task2 
getNumbers(1, 90);

//Task3
getNextPrime(120);


function checkPrime(a) {

    for (let i = 2; i < a; i++) {
        if (a % i == 0) return false;
    }
    return true;
}


function getNumbers(x1, x2) {

    for (let i = x1; i < x2; i++) {
        if (checkPrime(i) == true) {
            console.log(i);
        }

    }

}


function getNextPrime(n) {

    for (let i = n + 1;; i++) {

        if (checkPrime(i) == true) {
            console.log(i);
            break;

        }
    }
}













9 / 2 = 4, 5
9 / 8 = 1, 1
9 / 3 = 3








// let numberValue = +prompt('Введите чило!');
// for (i = 1; i < numberValue; i++) {
//     if ((numberValue % i == 0) && (i == numberValue)) {
//         numberValue = true;
//         console.log(numberValue);


//     } else {
//         numberValue = false;
//         console.log(numberValue);

//     }
// }