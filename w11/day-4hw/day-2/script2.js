let number = Number(prompt("Кез келген санды енгізіңіз:"));

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        alert("Цикл тоқтатылды, себебі сан жұп: " + i);
        break;
    }
    if (i % 3 === 0 && i % 5 === 0) {
        alert(i);
    }
}
