// Задание 3

// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.

// Вариант 1

// function calc(a) {
//   function calcTwo(b) {
//     return a + b;
//   }
//   return calcTwo;
// }

// console.log(calc(11)(23));

// Вариант 2

// const calc = (a) => {
//   const calcTwo = (b) => {
//     return a + b;
//   };
//   return calcTwo(13);
// };
// let result = calc(5);
// console.log(result);
