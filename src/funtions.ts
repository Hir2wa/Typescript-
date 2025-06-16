//types alias
type numberOrString = number | string;

interface GuitaristInterface {
  name: string;
  age?: number; // here we can make a agen optional for a user  by just putting the ? infront of the age please
  level: numberOrString;
}
