// Аргументы функции
// tag - имя тега которое функция должна создать
// className - строка с именами классов, или же массив строк с именами классов
//   может быть пропущен, указан null или undefined, чтобы у элемента не было классов
// parent - селектор элемента или же ссылка на сам элемент куда необходимо поместить созданный элемент
//   может быть не указан как и className, тогда элемент просто должен быть создан но не помещен в дерево
//   Если указан селектор, и элемент не найден, то не добавлять элемент НИКУДА
// content - элемент, строка или массив элементов и строк которые должны быть помещены в созданный элемент

// Функция должна возвращать только что созднный элемент как результат, вне зависимости от каких либо аргументов

const parent1 = document.querySelector('#parent1');

createElement('div', 'small red', parent1);
createElement('div', ['wide', 'green'], '#parent2', 'Большой текст');
/* createElement('strong', null, null, 'Большой текст'); */
function createElement(tag, className, parent, content) {
    /* console.log(typeof(className));
    let clsassMasive = className.join(' ');
           tagEl.className = clsassMasive;
           console.log(clsassMasive);
     */




    const tagEl = document.createElement(tag);
    /*     const tagEl2 = document.createElement(tag); */


    if (className) {
        if (Array.isArray(className)) {
            let clsassMasive = className.join(' ');
            tagEl.className = clsassMasive;
        } else {
            tagEl.className = className;
        }


        if (parent) {
            if (typeof (parent) == 'string') {
                const parent2 = document.querySelector(parent);
                if (parent2) {
                    parent2.append(tagEl);
                }
            } else {
                parent.append(tagEl);
            }
        }
    }

    if (className == null && parent == null) {

        tagEl.innerHTML += content;
        console.log(tagEl);

    }

    /* typeof(className) == 'object' 
             
          tagEl.innerHTML = clsassMasive;
 


  /*   const parentEl = document.createElement(); */

}


console.log(parent1);
console.log(parent2);
// Код пример как функция может быть использована


// имена классов могут быть указаны как цельная строка, и родительский элемент передан по ссылке
/* createElement('div', 'small red', parent1); */

// имена классов указаны в виде массива, родительский элемент как селектор
/* createElement('div', ['wide', 'green'], '#parent2'); */

// Просто создание элементов без класса и родителя, но с дочерним текстом
const strongText = createElement('strong', null, null, 'Большой текст');
const italicText = createElement('i', null, null, 'Курсивный текст');

// Создание ссылки с классом и указанием родителя как селектор, дочерние элементы могут быть разного рода (как просто элементы так и текст)
/* const link = createElement('a', '', '.some-div', [strongText, italicText, 'Просто текст']); */





































































// // Аргументы функции
// // tag - имя тега которое функция должна создать
// // className - строка с именами классов, или же массив строк с именами классов
// //   может быть пропущен, указан null или undefined, чтобы у элемента не было классов
// // parent - селектор элемента или же ссылка на сам элемент куда необходимо поместить созданный элемент
// //   может быть не указан как и className, тогда элемент просто должен быть создан но не помещен в дерево
// //   Если указан селектор, и элемент не найден, то не добавлять элемент НИКУДА
// // content - элемент, строка или массив элементов и строк которые должны быть помещены в созданный элемент

// // Функция должна возвращать только что созднный элемент как результат, вне зависимости от каких либо аргументов
// const parent1 = document.querySelector('#parent1');
// function createElement(tag, className, parent, content) {}
// const tagEl = document.createElement(tag);

// if (className) {
//     if (Array.isArray(className)) {
//         let clsassMasive = className.join(' ');
//         tagEl.className = clsassMasive;
//     } else {
//         tagEl.className = className;
//     }


//     if (parent) {
//         if (typeof (parent) == 'string') {
//             const parent2 = document.querySelector(parent);
//             if (parent2) {
//                 parent2.append(tagEl);
//             }
//         } else {
//             parent.append(tagEl);
//         }
//     }
// }

// if (className == null && parent == null) {

//     tagEl.innerHTML += content;
//     console.log(tagEl);

// }




// console.log(parent1);
// console.log(parent2);


// // Код пример как функция может быть использована
// // const parent1 = document.querySelector('#parent1');

// // имена классов могут быть указаны как цельная строка, и родительский элемент передан по ссылке
// createElement('div', 'small red', parent1);

// // имена классов указаны в виде массива, родительский элемент как селектор
// createElement('div', ['wide', 'green'], '#parent2');

// // Просто создание элементов без класса и родителя, но с дочерним текстом
// const strongText = createElement('strong', null, null, 'Большой текст');
// const italicText = createElement('i', null, null, 'Курсивный текст');

// // Создание ссылки с классом и указанием родителя как селектор, дочерние элементы могут быть разного рода (как просто элементы так и текст)
// const link = createElement('a', '', '.some-div', [strongText, italicText, 'Просто текст']);


// const elm = document.getElementById('parent1');
// elm.style.backgroundColor = 'blue';


// element.childNodes















// Аргументы функции
// tag - имя тега которое функция должна создать
// className - строка с именами классов, или же массив строк с именами классов
//   может быть пропущен, указан null или undefined, чтобы у элемента не было классов
// parent - селектор элемента или же ссылка на сам элемент куда необходимо поместить созданный элемент
//   может быть не указан как и className, тогда элемент просто должен быть создан но не помещен в дерево
//   Если указан селектор, и элемент не найден, то не добавлять элемент НИКУДА
// content - элемент, строка или массив элементов и строк которые должны быть помещены в созданный элемент

// Функция должна возвращать только что созднный элемент как результат, вне зависимости от каких либо аргументов

// const parent1 = document.querySelector('#parent1');
// createElement('div', ['wide', 'green'], parent1);


// function createElement(tag, className, parent, content) {
// console.log(typeof(className));
// let clsassMasive = className.join(' ');
//        /*   tagEl.className = clsassMasive; */
//        console.log(clsassMasive);





//     const tagEl = document.createElement(tag);


//     if (className !== null || className !== undefined || typeof(className) !== 'object'){
//         tagEl.className = className } 
//         else if (typeof(className) == 'object'){
//       /*    tagEl.className += className; */
//       let clsassMasive = className.join(' ');
//         tagEl.className = clsassMasive;
//         } else if (className == null || className == undefined){


//         tagEl.className = '';
//         }



//     tagEl.innerHTML = clsassMasive;



//   /*   const parentEl = document.createElement(); */
//     parent.append(tagEl);
// }

// console.log(parent1);

// // Код пример как функция может быть использована


// // имена классов могут быть указаны как цельная строка, и родительский элемент передан по ссылке
// /* createElement('div', 'small red', parent1); */

// // имена классов указаны в виде массива, родительский элемент как селектор
// /* createElement('div', ['wide', 'green'], '#parent2'); */

// // Просто создание элементов без класса и родителя, но с дочерним текстом
// /* const strongText = createElement('strong', null, null, 'Большой текст');
// const italicText = createElement('i', null, null, 'Курсивный текст'); */

// // Создание ссылки с классом и указанием родителя как селектор, дочерние элементы могут быть разного рода (как просто элементы так и текст)
// /* const link = createElement('a', '', '.some-div', [strongText, italicText, 'Просто текст']); */



// // Аргументы функции
// // tag - имя тега которое функция должна создать
// // className - строка с именами классов, или же массив строк с именами классов
// //   может быть пропущен, указан null или undefined, чтобы у элемента не было классов
// // parent - селектор элемента или же ссылка на сам элемент куда необходимо поместить созданный элемент
// //   может быть не указан как и className, тогда элемент просто должен быть создан но не помещен в дерево
// //   Если указан селектор, и элемент не найден, то не добавлять элемент НИКУДА
// // content - элемент, строка или массив элементов и строк которые должны быть помещены в созданный элемент

// // Функция должна возвращать только что созднный элемент как результат, вне зависимости от каких либо аргументов

// const parent1 = document.querySelector('#parent1');
// createElement('div', 'df', parent1);


// function createElement(tag, className, parent, content) {
// /* console.log(typeof(className));
// let clsassMasive = className.join(' ');
//        tagEl.className = clsassMasive;
//        console.log(clsassMasive);
//  */




//     const tagEl = document.createElement(tag);


//     if (className == null || className == undefined ){
//      tagEl.className = '';
//      } else 
//      if (typeof(className) == 'object'){
//      let clsassMasive = className.join(' ');
//         tagEl.className = clsassMasive;
//         } else{
//         tagEl.className = className ;

//         }



//    /*  tagEl.innerHTML = clsassMasive; */



//   /*   const parentEl = document.createElement(); */
//     parent.append(tagEl);
// }

// console.log(parent1);

// // Код пример как функция может быть использована


// // имена классов могут быть указаны как цельная строка, и родительский элемент передан по ссылке
// /* createElement('div', 'small red', parent1); */

// // имена классов указаны в виде массива, родительский элемент как селектор
// /* createElement('div', ['wide', 'green'], '#parent2'); */

// // Просто создание элементов без класса и родителя, но с дочерним текстом
// /* const strongText = createElement('strong', null, null, 'Большой текст');
// const italicText = createElement('i', null, null, 'Курсивный текст'); */

// // Создание ссылки с классом и указанием родителя как селектор, дочерние элементы могут быть разного рода (как просто элементы так и текст)
// /* const link = createElement('a', '', '.some-div', [strongText, italicText, 'Просто текст']); */




// const tagEl = document.createElement(tag);


// if (className == null || className == undefined ){
//  tagEl.className = '';
//  } else 
//  if (Array.isArray(className)){
//  let clsassMasive = className.join(' ');
//     tagEl.className = clsassMasive;
//     } else{
//     tagEl.className = className ;

//     }


// if (parent){
// if (typeof(parent) == 'string'){
// const parent2 = document.querySelector(parent);
// parent2.append(tagEl);
// } else{
// parent.append(tagEl)}
// } 







// const tagEl = document.createElement(tag);


// if (className){
// if (Array.isArray(className)){
//  let clsassMasive = className.join(' ');
//     tagEl.className = clsassMasive;
//     } else{
//     tagEl.className = className ;
//      }


// if (parent){
// if (typeof(parent) == 'string'){
// const parent2 = document.querySelector(parent);
// parent2.append(tagEl);
// } else{
// parent.append(tagEl)}
// } 


// } 