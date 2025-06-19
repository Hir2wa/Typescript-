//inside class properties and methods are called members
//visibility modifier
//protected means  propety can be accessed inside the deriverid class
//private inside that class only
//readonly id for can be read but after init it can't be changed

class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.age = age;
    this.lang = lang;
    this.music = music;
  }
  public getAge() {
    return `Hello , I'm ${this.age}`;
  }
}

let Dave = new Coder("Dave", "Local", 22);

console.log(Dave.getAge());

/////////////////////////////////////////////////////////////////
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Artist implements Musician {
  name: string;
  instrument: string;
  play(action: string): string {
    return ` ${this.name}  plays ${this.instrument} `;
  }
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
}

const page = new Artist("Alain", "Guitar");

console.log(page.play("distartb"));
///////////////////////////////////////////////////////
class Pepps {
  static count: number = 0;
  static getCount(): number {
    return Pepps.count;
  }

  id: number;
  constructor(public name: string) {
    this.id = ++Pepps.count;
    this.name = name;
  }
}

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
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.data = value;
      return;
    } else throw new Error("Parameter is not Array of string ");
  }
}
