//inside class properties and methods are called members
//visibility modifier
class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string
  ) {
    this.name = name;
    this.age = age;
    this.lang = lang;
    this.music = music;
  }
}
