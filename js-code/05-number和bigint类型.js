let i = 10
console.log(typeof i) // number

console.log(10 / 0) // Infinity
console.log(-10 / 0) // -Infinity

console.log(2.0 - 1.1) // 0.8999999999999999

let num1 = parseInt('10')
console.log(num1) // 10
console.log(typeof num1) // number

let num2 = parseInt('10.5')
console.log(num2) // 10
console.log(typeof num2) // number

let num3 = parseFloat('10') / 3
console.log(num3) // 3.3333333333333335
console.log(typeof num3) // number

let num4 = parseInt('abc')
console.log(num4) // NaN
console.log(typeof num4) // number

let num5 = '10' - 0
console.log(num5) // 10
console.log(typeof num5) // number

let num6 = '10' + 0
console.log(num6) // 100
console.log(typeof num6) // string

let num7 = 10n / 3n
console.log(num7) // 3n
console.log(typeof num7) // bigint
// console.log(10n / 0n) // error