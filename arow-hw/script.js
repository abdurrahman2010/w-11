// //push()-Массивтын сона жанан элемент косады
// let arr = [3,6,7,9]

// arr.push("Abdukosyachnik","Bakzhan","Azamat")

// console.log(arr);


// let alungan = arr.pop()

// console.log("alyp tgan element:", alungan);

// console.log(arr);

// let alunganbasy = arr.shift()

// console.log("Алып  тасталган бастапкы элемент",alunganbasy);

// console.log(arr);

// //unshift()- масивтын алдына косады
// arr.unshift("Erasylplanka", "Qolshaudi")
// console.log(arr);






// let jemiss = ["Алма", "Банан", "шие"]
// let jemister = +prompt("Қанша жеміс еңгізесіз?");
// let b = 1;

// while (b <= jemister) {
    
//     let jemis = prompt(b + "-Жеміс жидек");
    
//     jemiss.push(jemis);
//     b++;
// }

// console.log("Енгізілген жемістер:", jemiss)




// //slice () maasivtin belgili bir bolign bolin=p aladh

// let massiv = [45,68,25];

// let kosh = massiv.slice(2,4)

// console.log("Масивтін өзі", massiv);
// console.log("көшірілген", kosh);
                                    


// 1. Бос массив ашамыз
let sandar = [];

while (true) {
    // 2. Қолданушыдан сан енгізуді сұраймыз
    let san = parseInt(prompt("Санды енгізіңіз (тоқтату үшін 0 енгізіңіз): "));
    
    if (san === 0) {
        break;
    } else if (san % 2 === 0) {
        // 3. Жұп сан болса, массивтің басына қосамыз
        sandar.unshift(san);
    } else {
        // Тақ сан болса, массивтің соңына қосамыз
        sandar.push(san);
    }
}

// 5. Массивтің өзін және ұзындығын шығарамыз
console.log("Массив:", sandar);
console.log("Массив ұзындығы:", sandar.length);
