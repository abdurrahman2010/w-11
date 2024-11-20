// let abdurrahman=prompt("akshani engiz")
// let valuta=prompt("akanin turin engiz")
// function kursaniktau(aksha,valuta) {
//     if (valuta=="dollar" ) {
//         return aksha *500
//     }
//     else if (valuta=="euro") {
//         return aksha * 550
//     }

//     else if (valuta=="rub") {
//         return aksha * 6
//     }
//     else {
//         alert("siz baska valuta turin engizdiniz")
//     }
// }
// alert(kursaniktau(abdurrahman,valuta))




function greetInKazakh() {
    alert("Сәлем! Қалыңыз қалай?");
}

// Орысша амандасу функциясы
function greetInRussian() {
    alert("Привет! Как дела?");
}

// Ағылшынша амандасу функциясы
function greetInEnglish() {
    alert("Hello! How are you?");
}
function askStudent() {
    let isStudent = confirm("Сіз студентсіз бе?");
    if (isStudent) {
        let language = prompt("Қай тілде сөйлейсіз? (қазақша, орысша, ағылшынша)");

        // Тілді таңдау және сәйкес функцияны шақыру
        if (language.toLowerCase() === "қазақша") {
            greetInKazakh();
        } else if (language.toLowerCase() === "орысша") {
            greetInRussian();
        } else if (language.toLowerCase() === "ағылшынша" || language.toLowerCase() === "english") {
            greetInEnglish();
        } else {
            alert("Кешіріңіз, мен бұл тілді түсінбеймін.");
        }
    } else {
        alert("Жарайды, жақсы күн тілеймін!");
    }
}

// Функцияны шақыру
askStudent();



let student=prompt("Сіз косячник студентсізбе? иа/жок")
let language=prompt("сіздін тілніз кандай егерде сіз косячник тілі болсаныз мен сізге кунде сеізге любителски сендвич алып беремін   /англ/рус/каз")
function kosachnik(student,language) {
    if (student=="иа") {
    }
    else  {
        alert("сіз бәрібір косячниксыз өтесіз")
    }
}