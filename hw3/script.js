
const students = [
    {
        name: "Айжан",
        math: 95,
        city: "Алматы"
    },
    {
        name: "Бекзат",
        math: 88,
        city: "Астана"
    }
];


const { name, math, city, country = "Қазақстан" } = students[0];

console.log(`Аты: ${name}`);
console.log(`Математика бағасы: ${math}`);
console.log(`Қала: ${city}`);
console.log(`Ел: ${country}`);
