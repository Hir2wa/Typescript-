//inside class properties and methods are called members
//visibility modifier
//protected means  propety can be accessed inside the deriverid class
//private inside that class only

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

console.log(Dave.getAge);
