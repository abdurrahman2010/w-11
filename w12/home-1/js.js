function compareWords(word1, word2) {
    // Екі сөзді кішірейтілген түрде салыстыру
    if (word1.toLowerCase() === word2.toLowerCase()) {
        return "Сөздер бірдей";
    } else {
        return "Сөздер әртүрлі";
    }
}

// Функцияны тексеру мысалдары
console.log(compareWords("Javascript", "javascript")); // Сөздер бірдей
console.log(compareWords("Hello", "world")); // Сөздер әртүрлі
