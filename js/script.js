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

//alert('С добрым утром');
//alert(Math.min(2, 5) + 100);


/*confirm('Ну что поехали ?');
prompt('Только скажи. Ты все взял?', '');

var theNumber = Number(prompt('do chouse a number', ''));
alert('Your number is ' + theNumber * theNumber);
*/

var theNumber = Number(prompt('insert please number', ''));
if (!isNaN(theNumber))
    alert('Your number is ' + theNumber * theNumber);
else
    alert(' no correct number');

var number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

do {
    var name = prompt('insert your name please ');
} while (!name);
console.log(name);



for (var number = 0; number <= 12; number = number + 2)
    console.log(number);





/*
Eсть входные данные:
размеры коробки (10 * 20 * 40)
диаметр круга (15)

Входные параметры записать в переменные и назвать (width, height, length, diameter)

Посчитать объем коробки и записать результат в переменную.
Посчитать площадь одной из сторон коробки и записать в переменную.
Посчитать площадь круга и записать в переменную.

Результирующие переменные вывести через console.log с подписанием того что выводится
console.log('Parameter:', variable); */

var width = a = 10,
    height = b = 20,
    length = c = 40;
var cubicVolume = a * b * c,
    sideArea = b * c;

console.log('Кубический обьем:', cubicVolume, 'см.куб'),
    console.log('Площадь стороны:', sideArea, 'см.кв');

var diameter = d = 15,
    circleArea = Math.PI / 4 * (d * d);

console.log('Площадь стороны:', circleArea, 'см.кв');