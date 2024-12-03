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
// let sandar = [];

// while (true) {
//     // 2. Қолданушыдан сан енгізуді сұраймыз
//     let san = parseInt(prompt("Санды енгізіңіз (тоқтату үшін 0 енгізіңіз): "));
    
//     if (san === 0) {
//         break;
//     } else if (san % 2 === 0) {
//         // 3. Жұп сан болса, массивтің басына қосамыз
//         sandar.unshift(san);
//     } else {
//         // Тақ сан болса, массивтің соңына қосамыз
//         sandar.push(san);
//     }
// }

// // 5. Массивтің өзін және ұзындығын шығарамыз
// console.log("Массив:", sandar);
// console.log("Массив ұзындығы:", sandar.length);






// let sandar = [2,4,7,11,16]
// for(let i = 0; i < sandar.length; i++){
//     if(sandar[i] % 2 ==0){
//         console.log(sandar[i]);
//     }else{
//         console.log(sandar[i]);
//     }
// }



// let sandar = [2,5,6,9]
// for (let san of sandar) {
//    if (san % 2 == 0) {
//     console.log("Jup", san);
//    } else {
//     console.log("Taq san", san);
//    } 
// }






// let fruits = ["Apple", "Banana", "Cherry",]
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// })

// let numb = [2,4,7,11,16]
// numb.forEach(function (num) {
//     if (num%2!=0) {
//         console.log("taq");
//     }else{
//         console.log("jup");
        
//     }
// })



 
// let numb = [2,4,7,11,16]

// // let array = numb.map(san =>{
// //     if(san % 2 == 0 ){
// //         return san
// //     }

// // })
// //     console.log(array);



// let aray = numb.map(san=> san%2==0?san:"taq")
// console.log(aray);



// let numb = ["almaty","astana","Karagandy"]
// let bellow = numb.map(aty => aty + ".kz")
// console.log(bellow)


// let numbas = [1,2,3,4,5];
// let evens = numbas.filter(num=> num % 2 === 0);
// console.log(evens);//[2.4]







//object 
// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: "2020",
//     jurgizu:function(){
//         alert("kolik otald")
//     },
// }

// console.log(car.model);
// console.log(car.brand);
// console.log(car.year);

// car.model = "land cruiser"
// car.tusi = "Qara"
// car.probeg= "57565"

// console.log(car);

// let product = {
//     name: "sotka",
//     brand: "apple",
//     model: "Iphone 16pro max",
//     bagsy: "800000",
//     discount: (IphoneBagsy)=> {
//         return IphoneBagsy * 0.9
//     },
//     list_ino: function(){
//         return `product aty: ${this.name}
//         product brand:${this.brand}
//         product model:${this.model}
//         product negizgi bagsy: ${this.bagsy}
//         product skidkamen bagsymen: ${this.discount(this.bagsy)}`
//     }
// }




// alert(product.list_ino())






// let product = {

//     name: "Abdurrahman",
//     surname: "Beket",
//     weight: "60",
//     list_ino: function(){
//         return `adam aty: ${this.name}
//         surname:${this.surname}
//         weight:${this.weight}
//         `
//     }
// }
// alert(product.list_ino())
        
// let menu = {
//     items: ["Pizza", "shushi", "Doner", "Salat"],
//     tizim:function(){
//         return this.items.join("    tamak ")
//     }
// }

// console.log(menu.tizim());






// let libary = {
//     books: ["sinyi tractor","qara sozder", "ushan uiya" ],
//     kitapQosy: function(kitap){
//         this.books.push(kitap)
//     }
// }

// libary.kitapQosy("Nurikamal")

// console.log(libary);                                   





//   let Qolshaudi = {
//         aty:"aliya",
//         jasy:28,
//         hobbies:["sleeping", "Crying", "Qusestionig", "Minecrafting",]
//   }

//   console.log(Qolshaudi.hobbies);



//   Qolshaudi.hobbies[1]= "moving"

//   console.log(Qolshaudi);

  
//   Qolshaudi.hobbies.push("Dansing")
//   console.log(Qolshaudi);



// console.log(Qolshaudi.hobbies("-"));




// let filtered = Qolshaudi.hobbies.filter(hobby=>hobby.length<=7)




// console.log(qoldanushlar.filter(jastar=>jastar.jasy<15));



let m=[
    {
    aty:"aliya",
    jasy:28,
    hobbies:["sleeping", "Crying", "Qusestionig", "Minecrafting",]
    },
    {
        aty:"abdurrahman",
        jasy:14,
        hobbies:["sport", "gym", "aura1000000000+"]
        filter.==>jasy,
    },
]















