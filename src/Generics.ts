//starting  with  Generics in typscript  in typsript
const gen = (args: string): string => args;
const test = (name: gen) => {
  return name;
};
test("Alain");
