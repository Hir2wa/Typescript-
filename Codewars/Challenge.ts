//return  false if number is 1  and else number  to be true
export function plural(n: number): boolean {
  if (n === 1) {
    return false;
  } else {
    return true;
  }
}
// Create a TypeScript function that:
// Accepts a name (string) and an optional age (number).
// Returns a greeting message like:
// "Hello Alain!"
// "Hello Alain, you are 22 years old!" (if age is provided)
function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello ${name}, you are ${age} years old!`;
  }
  return `Hello ${name}!`;
}

console.log(greet("Alain"));
console.log(greet("Alain", 22));
//what learned
// You get used to writing types: string, number, ? for optional
// You learn about function return types
// You practice writing clear logic
// It's readable, and you can build on it (like adding job titles, hobbies, etc.)

export function orderedCount(text: string): [string, number][] {
  const result: [string, number][] = [];
  const seen = new Set<string>();

  for (const char of text) {
    if (!seen.has(char)) {
      const count = [...text].filter((c) => c === char).length;
      result.push([char, count]);
      seen.add(char);
    }
  }

  return result;
}
