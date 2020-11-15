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


var width = 10,
    height = 20,
    length = 40;
var cubicVolume = width * height * length,
    sideArea = height * length;

console.log('Кубический обьем:', cubicVolume, 'см.куб');
console.log('Площадь стороны:', sideArea, 'см.кв');

var diameter = 15,
    circleArea = Math.PI / 4 * (diameter * diameter);

console.log('Площадь стороны:', circleArea, 'см.кв');

/* P.S В начале сделал как ниже, все работало 
но какое то сообщение выдало для переменных a,b,c - что возможна 
утечка данных, но зато более математически смотрелось ))) 
*/

/*var width = a = 10,
    height = b = 20,
    length = c = 40;
var cubicVolume = a * b * c,
    sideArea = b * c;

console.log('Кубический обьем:', cubicVolume, 'см.куб');
    console.log('Площадь стороны:', sideArea, 'см.кв');

var diameter = d = 15,
    circleArea = Math.PI / 4 * (d * d);

console.log('Площадь стороны:', circleArea, 'см.кв');

*/