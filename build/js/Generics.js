"use strict";
let test = (args) => {
    return typeof args === "object" && !Array.isArray(args) && args !== null;
};
console.log(test(1));
console.log(test({ name: "" }));
