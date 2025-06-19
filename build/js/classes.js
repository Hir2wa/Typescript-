"use strict";
//inside class properties and methods are called members
//visibility modifier
//protected means  propety can be accessed inside the deriverid class
//private inside that class only
//readonly id for can be read but after init it can't be changed
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
    }
    getAge() {
        return `Hello , I'm ${this.age}`;
    }
}
let Dave = new Coder("Dave", "Local", 22);
console.log(Dave.getAge());
class Artist {
    play(action) {
        return ` ${this.name}  plays ${this.instrument} `;
    }
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
}
const page = new Artist("Alain", "Guitar");
console.log(page.play("distartb"));
///////////////////////////////////////////////////////
class Pepps {
    static getCount() {
        return Pepps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Pepps.count;
        this.name = name;
    }
}
Pepps.count = 0;
//we will be getting the id + 1 when first member of class is istiated
const Alain = new Pepps("Alain");
const Hirwa = new Pepps("Hirwa");
const Fabrice = new Pepps("Fabrice");
console.log(Alain);
console.log(Hirwa);
console.log(Fabrice);
console.log(Pepps.count);
//working on incapsulation
class Band {
    constructor() {
        this.dataState = [];
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Parameter is not Array of string ");
    }
    get data() {
        return this.dataState;
    }
}
let BandsData = new Band();
BandsData.data = ["Alain", "Fabrice", "Hirwa"];
console.log(BandsData.data);
