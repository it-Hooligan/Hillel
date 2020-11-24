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


function userInt(text) {
    const result = prompt(text);
    const number = parseInt(result);
    return number;
}

const a = userInt();

console.log(a);









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