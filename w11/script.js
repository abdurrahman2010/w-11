function findMinMaxDivisibleByFive(userNumber) {
    let min = null;
    let max = null;

    for (let number = 1; number <= userNumber; number++) {
        if (number % 5 === 0) {
            if (min === null || number < min) {
                min = number;
            }
            if (max === null || number > max) {
                max = number;
            }
        }
    }

    return {min, max};
}

let userNumber = parseInt(prompt("Кез келген оң санды енгізіңіз:"));
let result = findMinMaxDivisibleByFive(userNumber);

if (result.min !== null && result.max !== null) {
    alert("Ең кіші сан: " + result.min + "\nЕң үлкен сан: " + result.max);
} else {
    alert("5-ке бөлінетін сандар жоқ.");
}






