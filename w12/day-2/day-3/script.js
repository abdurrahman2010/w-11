// document.getElementById("give-alert").addEventListener("click",  ()=> alert("sen baturmanu bastund"))
//     alert("sen batyrmany bastyn")

        document.getElementById("qosu").addEventListener("click", function () {
            let san1 = document.getElementById("san1").value
            let san2 = document.getElementById("san2").value
            let sum = parseInt(san1) + parseInt(san2)
            document.getElementById("natizhe").innerHTML = sum
        })
        document.getElementById("azaitu").addEventListener("click", function () {
            let san1 = document.getElementById("san1").value
            let san2 = document.getElementById("san2").value
            let minus = parseInt(san1) - parseInt(san2)
            document.getElementById("natizhe").innerHTML = minus
        })


// function qosu(a,b) {
//     return a + b;
// }

// //arow function
// let qosu = (a,b) => a + b;
// let azaitu = (a,b) =>{
//     if (a>b) {
//         return "A sany b dan ulken"
//     }else{
//         return "B sanu A dan ulken"
//     }
// }


function kosu(a, b) {
    return a + b;
}
console.log(kosu(4, 6));


const kosu = (a, b) => a + b;
console.log(kosu(4, 6));

// const findLength = function (text) {
//     return text.length
// };

// const findLength = (a, b) => a + b;

const findLength = (text) => {
    console.log(text.length);
};  

let shygun_total=0;
let maxTagam;
let maxTagam_baga=0;

function shygunTap() {
    let i = 1;
    while (true) {
        let shygunAtu = prompt(i + "-shygyn atyn jaz")
        let shygunBaga = +prompt(i+ "-shygn bagsyn jaz")
        if(shygunAty.toLowerCase() == "тоқта" || shygunAty.toLowerCase() == "аяқтау"){
            console.log(`shygyn nomeri #${i}`)
        }
        i++;
    }
}