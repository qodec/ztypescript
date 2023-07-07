function addx(num1: number, num2: number) {
  return num1 + num2;
}

let n = 19;
console.log("Adding: " + addx(n, 5));

// Objects
interface Person {
  name: string;
  age: number;
}
// OR
type Personz = {
  name: string;
  age: number;
};
let person: Personz = {
  name: "Kunle",
  age: 20,
};

console.log(person.name);

// Arrays
let mmx: Array<string> = ["Joke", "Wale", "Wande"];
let mm: string[] = ["Joke", "Wale", "Wande"];
let nn: number[] = [45, 50, 55, 60];
let oo: any[] = [45, "50", 55, "60"];

console.log(mm, nn, oo);

// Tuple
let pp: [number, string] = [1, "Zoe"];
// pp[1] = 'Hello'

console.log(pp);

// Enums
enum Role {
  ADMIN,
  CLIENT = 9,
  USER,
}
enum Gender {
  MALE = "male",
  FEMALE = "female",
}

let user_role: Role = Role.ADMIN;
let user_gender: Gender = Gender.MALE;

console.log("Role is Admin: " + Role.ADMIN);
console.log("Role is Admin: " + Role.USER);
console.log("Role is Admin: " + Role);

// Union types
// number | string | xxxx
type Age = number | boolean;
let age: Age = 12;
let agee: number | string | boolean = true;

// Literal types
// as-number, as-text

// Type aliases
type XXX = number | string; // for example

// Function types
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// string, number, boolean, unknown

// can also return void, undefined etc
// Then

// let combine : Function;
type FnAdd = (a: number, b: number) => number;

let combine: FnAdd = (a, b) => {
  return a + b;
};

// let combine : (a: number, b: number) => number;
// combine = add;
console.log(combine(5, 7));

// Unknown type
let qq: unknown;

// Never type
function genError(msg: string, code: number): never {
  throw { message: msg, errorcode: code };
}

// genError('Yoooooo! some error', 400)
