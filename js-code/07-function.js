function add(a, b) {
    return a + b;
}

console.log(add(1, 2))

console.log(add('a', 'b')) // ab

console.log(add(4, 5, 6)) // 9

console.log(add(1)) // NaN
console.log('-----------------')

function pagination(page = 1, size = 10) {
    console.log(page, size)
}

pagination(2, 5)
pagination(2)
pagination()
pagination(undefined, 5) // 1 5
console.log('-------------------');

// 匿名函数
(function (a, b) {
    return a + b
})

console.log((function (a, b) {
    return a + b
})(1, 2))

document.getElementById('p1').onclick = (function () {
    console.log('clicked 1...')
})

// 箭头函数
document.getElementById('p2').onclick = () => {
    console.log('clicked 2...')
}

document.getElementById('p3').onclick = () => console.log('clicked 3...')

function myClick() {
    console.log('clicked 4...')
}
// 具名函数也能参与赋值
document.getElementById('p4').onclick = myClick

// 查看函数对象的属性、方法
console.dir(myClick)
console.log(myClick.name)

// 函数可以作为方法参数
function a() {
    console.log('a')
}

function b(fn) {
    console.log('b')
    fn()
}

b(a)

// 函数可以作为方法返回值
function c() {
    console.log('c')
    function d() {
        console.log('d')
    }

    return d
}

c() // c
console.log(c()) // ƒ d() { console.log('d') }
c()() // d
console.log('------------------')

// 函数的作用域
function f1() {
    var z = 30
}
var x = 10
function f2() {
    var y = 20
    function f3() {
        console.log(x, y)
        // console.log(z) // error
    }
    console.dir(f3)
    f3()

    console.log(x)
    // console.log(z) // error
}
f2()
console.dir(f2)

// console.log(z) // error

// 闭包
var x = 10;
function f4() {
    var y = 20;
    function f5() {
        console.log(x, y);
    }
    return f5;
}
f4()();  // 在外面执行了b
console.log('---------------')

// let作用域提升
let num1 = 10
if (true) {
    let num2 = 20
    function f6() {
        console.log(num1, num2)
    }
    console.dir(f6)
}

var num3 = 10
if (true) {
    var num4 = 20
    function f7() {
        console.log(num3, num4)
    }
    console.dir(f7)
}

// 处于同一作用域中的重名的var变量会被视为同一个变量
var num5 = 10
if (true) {
    var num5 = 20
    console.log(num5) // 20
}
console.log(num5) // 20

// 解决办法一：用let声明变量
let num6 = 10
if (true) {
    let num6 = 20
    console.log(num6) // 20
}
console.log(num6) // 10

// 解决办法二：用函数来界定作用域范围
var num7 = 10
if (true) {
    function f8() {
        var num7 = 20
        console.log(num7) // 20
    }
    f8()
}
console.log(num7) // 10