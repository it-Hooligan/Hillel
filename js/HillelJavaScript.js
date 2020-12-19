// arr.jf = 5; 

// console.log(arr);


let arr = [23, 45, 67, 'dik', 'fogk', 5, ];
for (let i of arr) {
    console.log(i);
}

console.log(arr[3]());


let fruits = ["Яблоко", "Апельсин", "Слива"];

// fruits.splice(1,2,"Слива Нова",4 , 4, 5);

// проходит по значениям
// for (let fruit of fruits) {
// console.log(fruits);
// console.log(fruits.length);

// }

fruits.forEach(console.log);


let getSum = (a, b, c) => a * b + c;



console.log(getSum(2, 4, 9));




let arr1 = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr1.map(item => item.length);

console.log(arrLength); // 4,5,2,5



const obj = {
    all: "people",
    nadia: "people",
    cat: "animal",
    hors: "animal"
};
let newM = [];
for (let key in obj) {
    if (obj[key] == "people") {
        newM.push(key);
        console.log(key);
    }
}
console.log(newM);


let newObj = Object.entries(obj)
    .filter(k => k.includes("people"))
    .map(item => item[0]);
console.log(newObj);






const arr2 = [5, "жизнь", "на", "Марсе", [2, 5]];
console.log(arr2);
var arrLength = arr2.map(item => {

    item[0] = 4;
    return item;
});

console.log(arrLength);
console.log(arr2);

























let arr = [];

getSimpleNumbers(2, 20);

console.log(arr);

console.log(getSumOfNumbers(arr));
console.log(getAverageOfNumbers(arr));

console.log(minNumber(arr));
console.log(maxNumber(arr));


function getSimpleNumbers(from, to) {
    lot: for (let i = from; i < to; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0)
                continue lot;
        }
        arr.push(i);
    }

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
        if (arr[i] < minResult) {
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


// function start() {
//     const from = getUserNumberAsInteger('Диапазон от:');
//     const to = getUserNumberAsInteger('Диапазон до:');

//     const simpleNumbers = getSimpleNumbers(from, to);

//     console.log('========================================');
//     console.log(`Диапазон задан от ${from} до ${to}`);
//     console.log('Простые числа', simpleNumbers);
//     // Тут вывести в консоль результаты всех остальных функций
//     console.log(`Массив чисел: ${arr}`);
//     console.log(`Сумма всех чисел: ${getSumOfNumbers(arr)}`);
//     console.log(`Среднее арифметическое: ${getAverageOfNumbers(arr)}`);
//     console.log(`Минимальное число в массиве: ${minNumber(arr)}`);
//     console.log(`Максимальное число в массиве: ${maxNumber(arr)}`);


//     console.log('========================================');
// }

// function getUserNumberAsInteger(message) {
//     const userInput = prompt(message);
//     return parseInt(userInput);
// }























// hello -коментарий строчный 
/* 
двухстрочный комментарий 
*/



/*var num = 123.5; // Обьявление числв
var str1 = 'hello'; // можно такие и такие - но нужно испльзовать один стиль 
var str2 = "hello"; //стили кавычек
console.log(num);

var boolTrue = true;
var boolFalse = false;

console.log(boolTrue, boolFalse);


var empty1 = null;
var empty2 = undefined;

console.log(empty1, empty2);

// Переменные 
var a = '1';
var b = '2';
a = a + b;
console.log(a, b, c);

var a = '1';
var b = '2';
let c = '3';

console.log(a, b, c);

const type = typeof 'hf';
console.log(type);*/


// var a = 3;
// var b = 4;

// console.log(a && b);

// var a = null;
// var b = 4;

// console.log(a && b);


// var a = 3;
// var b = 4;

// console.log(a || b);

// var a = null;
// var b = 0;

// console.log(a || b);




// // итерация - повторение 

// console.log('Before while');
// let count = 0;

// while (count < 5) {
//     const input = prompt('user input');
//     console.log('user:', input);
//     count = count + 1;
// }
// console.log(count);
// console.log('After while');



// do {

// } while (true);

// console.log('After while');


// function userInt(text) {
//     const result = prompt(text);
//     const number = parseInt(result);
//     return number;
// }

// const a = userInt();

// console.log(a);





// const PI_NUMBER = 3.1415;
// const result = 1234;

// function factioral (number){
//     for (){}
// }


// const obj = {
//     name: 2,
//     user: 3

// };
// obj.a = 4;
// obj.c = obj;
// console.log(obj);


// const arr = [1, 2, 3, 4, 5, ];
// arr[7] = 5;



// console.log(arr);








// let sum = (a, b) => { // фигурная скобка, открывающая тело многострочной функции
//     let result = a + b;
//     return result; // при фигурных скобках для возврата значения нужно явно вызвать return
// };

// alert(sum(1, 2)); // 3




// const getSum = function () {


// }

// function getSum1() {


// }


// function doHomework(subject) {
//     console.log(`Starting my ${subject} homework`);
// }
// doHomework(45);

// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework.`);
//     callback();
// }

// function alertFinished() {

//     alert('ljkljkljjljl');

// }
// doHomework('math', alertFinished);



// let seyHi = (a, b) =>a + b;
// //    return result;




// console.log(seyHi(5,9));




//? Object

// let user = new Object{};
// let user = {
//     name: 'Lex',
//     age: 13,
//     "like is good": 23,
//     secondName: 'Malinov'
// };
// console.log( user.name );
// console.log( user.age );


// user.isMartin = true;
// console.log(user);
// delete user.age;
// console.log(user);

// //?? user."africa is good" = 34;  как добавить если с двух слов название ключа

// user.name = "Ted";
// console.log(user);

// user["stret km"] = 456;

// console.log(user["stret km"]);


// let user = {};
// let song = 56;
// user[song] = 34;
// console.log(user);


// let user = {
//     name: "k",
//     "50": 30,
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания",
//     // ..,
//     "1": "США"

// };

// console.log(user.name);
// console.log(user['name g'] = 6);
// console.log(user);



// user.fggggg = 78;
// console.log(user);
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
// for (let key in user) {
//     console.log(key);


//     console.log(user[key]); 
// }
// доступ к свойству через переменную





// let user = {
//     name: 'John',
//     surname: 'Smith',

// };

// user.name = "Pette";
// delete user.surname;
// console.log(user);

// console.log(key);

// const user = {


// };
// console.log(isEmpty(user));

// user["8:00 "] = "wake up";
// console.log(user);

// console.log(isEmpty(user));




// function isEmpty(obj) {
//     for (let key in obj) {
//         // // console.log(key);
//         // if (obj[key] !== null)
//         return false;

//     }

//     return true;


// }







// let salaries = {
//     Alex: 100,
//     Olga: 160,
//     Inna: 130

// };

// console.log(salSum(salaries));


// function salSum(obj) {
//     let result = 0;
//     for (let key in obj) {

//         result = result + obj[key];





//     }
//     return result;
// }



// let menu = {
//     width: 200,
//     height: 300,
//     tittle: "My menu"

// };
// multiPlay(menu);
// console.log(menu);

// function multiPlay(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }



// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework.`);
//     callback();
// }

// function alertFinished() {
//     alert('Finished my homework');
// }
// doHomework('math', alertFinished);




// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
// }

// function Finished(a, b) {
//     result = a + b;
//     return function () {
//         console.log(result);
//     }
// }

// doHomework('math', Finished(7, 4));
























/*
alert(true + "1" && true + "2"); // true 2
alert(false && true); // false
alert(true && false); // false
alert(false && null); //?? false 


alert(true + "1" || true + "2"); // true 1
alert(false || true); // true
alert(true || false); // true
alert(false || null); //??? null 
*/

let num = 30;

function shoeFirstMessage(x) {
    console.log(x);
    let num = 10;
}
shoeFirstMessage(`ghgh`);
console.log(num);

function ret() {
    num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);
const ds = [1, 4, 6, 5, 6, 5, 5, 5, 4, ];


// const str = 'texteeeeeeeeee';
// console.log(str.toUpperCase());
// let fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'Hellow world';
// const sl = logg.substr(4, 5);
// console.log(sl);

const num = '12.6px';
console.log(parseFloat(num));