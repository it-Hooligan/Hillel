//TODO: Кратные числа
/* Пользователь должен ввести 3 числа.
1 число указывает от какого числа искать.
2 число указывает до какого числа искать.
По третьему числу найти все числа в заданном диапазоне которые являются кратными числами к 3му числу которое ввел пользователь.
Кратность это когда число делится на другое без остатка.
8 % 2 === 0 получается 8 кратное 2
8 % 3 !== 0 получается 8 не кратное 2

Вывести все кратные числа.
*/


const numberStart = +prompt('Введите первое число, для указания начала диапазона поиска');
const numberEnd = +prompt('Введите второе число, для указания конца диапазона поиска');
const numberMultiple = +prompt('Введите третье число, для поиска кратных этому числу');

for (let i = numberStart; i <= numberEnd; i++) { // идут числа в диапазоне от и до  заданного пользователем !

    if (i % numberMultiple === 0) { // проверяем на кратность и если делится без остатка на заданное число - выводим в консоль!
        console.log(`Кратное число ${i}`);
    }
}














//     var numberPrime = i;
//     for (let j = 2; j < i; j++) { // идет проверка на деление каждого числа  на делитель от 2 до самого значения этого числа .
//         if (i % j == 0) continue lot;




//     }
//     console.log(` ${numberPrime} `);
//     //??  
// }



















// const userValue_1 = prompt('Введите первое число');
// const userValue_2 = prompt('Введите второе число');
// let n_1 = parseInt(userValue_1);
// let n_2 = parseInt(userValue_2);

// for (let i = n_1; i <= n_2; i++) { // идут числа в диапазоне от и до  заданого пользователем !
//     var numberPrime = i;
//     for (let j = 2; j <= i; j++) { // идет проверка на деление каждого числа  на делитель от 2 до самого значения этого числа .
//         if (i % j == 0) {
//             break;
//         }

//         console.log(` ${numberPrime} `);


//     }