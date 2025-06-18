"use strict";
//type casting is a way of overriding the type of a variable  such as when incorrect  variable is provided by a library
//in short casting is a way of overriding a variable
let sureName = "Alain";
console.log(typeof sureName);
console.log(sureName.length);
console.log(typeof sureName);
let p = "Alain";
let r = "Alain";
console.log(r);
//type alias is like creating you own type  and be reused
//using the unknown in types casting in double  that where is separate to any type
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
console.log(addOrConcat(4, 5, "add"));
let add = addOrConcat(3, 5, "add");
console.log(add);
//
//DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
img.src;
