function hasSpam(text, spamWords) {
    const spamWordsUpp = spamWords.map(str => str.toUpperCase());
    // console.log(spamWordsUpp);
    const textUpp = text.toUpperCase();
    // .split(' ');
    // console.log(textUpp);

    const haveSpam = spamWordsUpp.some(value => textUpp.includes(value));
    // console.log(noSpam);
    return haveSpam;
    // Функция должна проврять есть ли в тексте запрещенные слова, возвращать true или false в зависимости от наличия этих слов
    // Регистр текста влиять не влияет на результат, слово как из больших букв так и из маленьких если есть в массиве spamWords будет означать что текст содержит спам
}

function replaceSpam(text, spamWords, replaceWith) {
    const textArray = text.split(' '); // Входящий текст разбиваем на массив слов 
    // console.log(textArray);
    const spamWordsUpp = spamWords.map(str => str.toUpperCase()); // Спам массив слов приводим до единного регистра для дальнейшего применения при поиске их в массиве слов
    // console.log(spamWordsUpp);

    const withoutSpam = textArray.map(str => {
        const strUpp = str.toUpperCase(); // что бы не менять регистр строк в textArray  создаем новую переменную и ее модифицируем в верхний регистр. 
        if (spamWordsUpp.includes(strUpp)) { // Ищем под общим регистром строку с textArray в спам  массиве.
            return replaceWith; // меняем значение найденых слов .
        }
        return str; // возращаем значение не спам слов
    });
    // console.log(withoutSpam);
    const withoutSpamFinal = withoutSpam.join(' '); // возвращаем строку из массива 
    return withoutSpamFinal;

}


// Данная функция должна находить запрещенные слова в тексте, и удалять его при помощи текста переданного в агрументе replaceWith
// Если слово было написано с большими буквами то большие буквы должны и остаться в конечном тексте, если слово не является спамом

/* Пример работы
const text = 'A b c D e f G h i';
const spam = ['a', 'c', 'h'];

const result = replaceSpam(text, spam, 'XXX');
console.log(result); // 'XXX b XXX D e f G XXX i'
*/




// Дальнейший код нужен исключительно для проверки результата работы функций
// Менять его не нужно
const texts = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, voluptatibus maiores recusandae, perferendis tempore odit et aut dolore, voluptate porro expedita ipsa tenetur reiciendis illum delectus doloremque error magnam similique.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod mollitia voluptatibus, ipsam earum ipsum quasi doloribus iste alias veniam, quae velit qui voluptatum cupiditate, provident aspernatur, eos dolorem eius! Cupiditate.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel autem similique a porro itaque voluptate fuga quo, commodi laboriosam, quis expedita sapiente amet, placeat quibusdam provident vero ex. Eveniet, iusto?',
    '56 48',

];

const spamWords = [
    'dolorem',
    'commodi',
    'adipisicing',
    'doloribus',
];

texts.forEach(text => {
    const isTextContainsSpam = hasSpam(text, spamWords);
    const withoutSpam = replaceSpam(text, spamWords, 'XXXXXX');

    console.log(isTextContainsSpam);
    console.log(withoutSpam);
});