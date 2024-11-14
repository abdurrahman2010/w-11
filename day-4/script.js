function calculateAverageGrade() {
    // Студенттер санын енгізіңіз
    let studentCount = Number(prompt("Студенттер санын енгізіңіз: "));

    // Бағаларды енгізу
    let grades = [];
    for (let i = 0; i < studentCount; i++) {
        let grade = Number(prompt(`${i + 1}-студенттің бағасын енгізіңіз: `));
        grades.push(grade);
    }

    // Орташа мәнін есептеу
    let sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let averageGrade = sum / studentCount;

    // Нәтижені шығару
    alert(`Студенттердің бағаларының орташа мәні: ${averageGrade.toFixed(2)}`);
}

// Функцияны шақыру
calculateAverageGrade();
