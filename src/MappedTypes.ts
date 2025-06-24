type User = {
  name: string;
  student_id: number;
};
type Optional<T> = {
  [K in keyof T]?: T[K];
};

const test: Optional<User> = {
  name: "Alain",
  student_id: 26587,
};
console.log(typeof test);
