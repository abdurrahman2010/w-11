function convertToEUR(amount, currency) {
    switch (currency) {
        case 'USD':
            return amount * 0.85;
        case 'KZT':
            return amount * 0.002;
        case 'EUR':
            return amount;
        default:
            return 0;
    }
}

function collectMoney() {
    let totalEUR = 0;
    while (true) {
        let amount = prompt("Ақша сомасын енгізіңіз (немесе 'стоп' деп тоқтатыңыз):");
        if (amount.toLowerCase() === 'стоп') {
            break;
        }
        amount = parseFloat(amount);
        if (amount === 0) {
            break;
        }
        let currency = prompt("Валютаны енгізіңіз (USD, KZT, EUR):");
        totalEUR += convertToEUR(amount, currency.toUpperCase());
    }
    alert("Жалпы сома евро: " + totalEUR.toFixed(2) + " EUR");
}

// Бағдарламаны іске қосу
collectMoney();







