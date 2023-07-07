export class Calculator {
  static version = "1";
  constructor() {}
  add(a: number, b: number) {
    console.log(`version ${Calculator.version}`);
    return a + b;
  }
}

let calc = new Calculator();
console.log(calc.add(200, 600));
