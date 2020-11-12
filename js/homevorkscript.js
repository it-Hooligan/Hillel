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