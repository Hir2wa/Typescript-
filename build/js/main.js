"use strict";
let username = "Alain";
let a = 4;
let b = 5;
let c = "a";
console.log(username);
const sum = (a, b) => {
    return a + b;
};
//Array
let stringArray = ["a", "b", "c"];
let guitars = ["stract", "les Paul", 912];
let mixedArray = ["a", 5, true];
// mixedArray = stringArray
// stringArray = mixedArray    why these happens
let arr = [];
let brands = [];
//tupls is an array the  have fixed size and  precious datatypes it must take
//and you must follow the order
let mytuples = [5, "Alain", true];
let arrr = [5, "Hirwa", true];
arrr = mytuples;
let myObj = {
    name: "Alain",
    level: 4,
};
console.log(myObj);
let greet = (guitarist) => {
    return `Hello ${guitarist.name.toLowerCase()}`;
};
//Enums
//unlike other javascript features enums are  not type-level
//but something that is added to language and runtime as addition
//it something new forsure
var grade;
(function (grade) {
    grade[grade["a"] = 0] = "a";
    grade[grade["d"] = 1] = "d";
    grade[grade["h"] = 2] = "h";
})(grade || (grade = {}));
console.log(grade.d);
//they are enumurated
