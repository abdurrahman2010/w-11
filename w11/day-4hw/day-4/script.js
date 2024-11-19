// let san = +prompt("Student sanun engyz")
// let i=1;
// let TotalGrade = 0;

// while (i<=san) {
//     let baga = +prompt(i +"studentin bagasy")
//     TotalGrade = TotalGrade + baga;
//     i++;
// }
// let ortalama_baga = TotalGrade / san
// alert("Studenterdin ortalama bagasynin mani: "+ ortalama_baga)





for (let number = 1; number <= 20; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        alert(number + " буз");
    } else if (number % 3 === 0) {
        alert(number + " фис");
    } else if (number % 5 === 0) {
        alert(number + " гуз");
    } else {
        alert(number);
    }
}
