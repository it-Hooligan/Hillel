function hasSpam(text, spamWords) {
    const spamWordsUpp = spamWords.map(str => str.toUpperCase());
    const textUpp = text.map(text => text.toUpperCase());

    const noSpam = textUpp.filter(value => !spamWordsUpp.includes(value));
    // console.log(noSpam);
    return noSpam;
    // Функция должна проврять есть ли в тексте запрещенные слова, возвращать true или false в зависимости от наличия этих слов
    // Регистр текста влиять не влияет на результат, слово как из больших букв так и из маленьких если есть в массиве spamWords будет означать что текст содержит спам
}

function replaceSpam(text, spamWords, replaceWith) {
    // Данная функция должна находить запрещенные слова в тексте, и удалять его при помощи текста переданного в агрументе replaceWith
    // Если слово было написано с большими буквами то большие буквы должны и остаться в конечном тексте, если слово не является спамом

    /* Пример работы
    const text = 'A b c D e f G h i';
    const spam = ['a', 'c', 'h'];
    
    const result = replaceSpam(text, spam, 'XXX');
    console.log(result); // 'XXX b XXX D e f G XXX i'
    */
}



// Дальнейший код нужен исключительно для проверки результата работы функций
// Менять его не нужно
const texts = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, voluptatibus maiores recusandae, perferendis tempore odit et aut dolore, voluptate porro expedita ipsa tenetur reiciendis illum delectus doloremque error magnam similique.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod mollitia voluptatibus, ipsam earum ipsum quasi doloribus iste alias veniam, quae velit qui voluptatum cupiditate, provident aspernatur, eos dolorem eius! Cupiditate.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel autem similique a porro itaque voluptate fuga quo, commodi laboriosam, quis expedita sapiente amet, placeat quibusdam provident vero ex. Eveniet, iusto?',
];

const spamWords = [
    'dolorem',
    'commodi',
    'adipisicing',
    'doloribus',
];

texts.forEach(text => {
    const isTextContainsSpam = hasSpam(text, spamWords);
    // const withoutSpam = replaceSpam(text, spamWords, 'XXXXXX');

    // console.log(isTextContainsSpam);
    console.log(withoutSpam);
});

texts.forEach();