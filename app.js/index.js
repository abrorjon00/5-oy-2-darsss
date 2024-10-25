// Foreach

//1-misol;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(function(value, index, a) {
//     console.log(value);
// });



//2-misol;
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  arr.forEach(function(value, index, a) {
//      console.log(value + 5);
//  });



//3-misol;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(function(value, index, a) {
//     if (value % 2 == 1) {
//         console.log(value);
//     }
// });


//4-misol;
// let arr = [1, 3, 2, 4, 6, 7];
// let counter = 0;
// arr.forEach(function(value, index, a) {
//     console.log(counter++);
// });


//5-misol;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];
// arr.forEach(function(value, index, a) {
//     newArr.push(value);
// });
// console.log(newArr);

// Map


//1-misol;
// let arr = [1, 3, 5, 2];
// let res = arr.map(function(value, index, a) {
//     return value * 2;
// });
// console.log(res);



//2-misol;
// let arr = [1, 3, 5, 2];
// let res = arr.map(function(value, index, a) {
//     return value ** 2;
// });
// console.log(res);


//5-misol;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];
// arr.map(function(value, index, a) {
//     return console.log(newArr.push(value + 3));
// });
// console.log(newArr);

// Filter

//!1-misol;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];
// let res = arr.filter(function(value, index, a) {
//     if (value % 2 == 0) {
//         console.log(value);
//     }
// });


//2-misol;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];
// let res = arr.filter(function(value, index, a) {
//     if (value % 2 == 1) {
//         console.log(value);
//     }
// });


//3-misol;
// let arr = ["Alisher", "Mavlon", "Uch", "Najot"];
// let res = arr.filter(function(value) {
//     return value.length > 5;
// });
// console.log(res);


//4-misol;
// let arr = [11, 2, 3, 4, 23, 44, 18, 19, 21, 24];
// let res = arr.filter(function(value) {
//     return value > 18;
// });
// console.log(res);


//5-misol;
// let arr = [1, 2, 3, 4, 5, 44, 6, 19, 21, 8];
// let res = arr.filter(function(value) {
//     return value < 10;
// });
// console.log(res);



// Filter


//1-misol;
// let arr = [1, 12, 3, 4, 5, 44, 6, 19, 21, 8];
// let res = arr.find(function(value) {
//     return value > 10;
// });
// console.log(res);


//2-misol;
// let arr = [-1, -12, 3, 4, 5, -44, 6, -19, 21, -8];
// let res = arr.find(function(value) {
//     return value > 0;
// });
// console.log(res);


//3-misol;
// let arr = ["Alisher", "Mavlon", "Uch", "Najot"];
// let res = arr.find(function(value) {
//     return value.length > 4;
// });
// console.log(res);


//4-misol;
// let arr = [1, 12, 3, 4, 5, 44, 6, 19, 21, 8];
// let res = arr.find(function(value) {
//     return value % 2 == 0;
// });
// console.log(res);

// some/every
//SOME  ga oid
//1-misol;
// let arr = [1, 12, 3, 4, 5, 44, -6, 19, 21, 8];
// let res = arr.some(function(value) {
//     return value < 0;
// });
// console.log(res);


//2-misol;
// let arr = [1, 12, 3, 4, 5];
// let res = arr.some(function(value) {
//     return value % 2 == 0;
// });
// console.log(res);


//3-misol;
// let arr = ["Alisher", "Mavlon", "Uch", "Najot"];
// let res = arr.some(function(value) {
//     return value == "Apple";
// });
// console.log(res);


// EVERY  ga oid
//4-misol;
// let arr = [1, 12, 3, 4, -5];
// let res = arr.every(function(value) {
//     return value > 0;
// });
// console.log(res);


//5-misol;
// let arr = ["Alisher", "Mavlon", "Uch", "Najot"];
// let res = arr.every(function(value) {
//     return value === "string";
// });
// console.log(res);


//6-misol;
// let arr = [1, 12, 3, 4, 5];
// let res = arr.every(function(value) {
//     return value < 100;
// });
// console.log(res);



// Yozuvga oid misollar


// 1-misol
// let matn = "salom dunyo";
// let kattaHarflar = matn.toUpperCase();
// console.log(kattaHarflar); 


// 2-misol
// let matn = "Bu JavaScript darsi";
// let substringMavjudmi = matn.includes("JavaScript");
// console.log(substringMavjudmi); 


// 3-misol
// let matn = "JavaScript o'rganish juda qiziqarli. JavaScript kuchli til.";
// let almashtirilganMatn = matn.replace(/JavaScript/g, "JS");
// console.log(almashtirilganMatn); 


// 4-misol
// let matn = "Bu yerda juda ko'p qiziqarli narsalar bor";
// let teskariMatn = matn.split(' ').reverse().join(' ');
// console.log(teskariMatn); 


// 5-misol

// let matn = "    Salom dunyo!    ";
// let trimlanganMatn = matn.trim();
// console.log(trimlanganMatn);