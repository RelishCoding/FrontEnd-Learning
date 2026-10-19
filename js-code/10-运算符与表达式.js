/**
 * 严格相等运算符
 */
console.log(1 == 1) // true
console.log(1 == '1') // true
console.log(1 === '1') // false

console.log('----------')

/**
 * 严格不等运算符
 */
console.log(1 != 1) // false
console.log(1 != '1') // false
console.log(1 !== '1') // true

console.log('----------')

/**
 * typeof
 */
console.log(typeof 1) // number
console.log(typeof '1') // string
console.log(typeof true) // boolean
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof NaN) // number
console.log(typeof function () {}) // function

console.log('----------')

/**
 * 逻辑或
 */
function test(n) {
    n = n || '男';
    console.log(n);
}
test() // 男
test('女') // 女

console.log('----------')

/**
 * 空值合并运算符 ??
 */
function test2(n) {
    n = n ?? '男';
    console.log(n);
}
test2() // 男
test2(null) // 男
test2('女') // 女

console.log('----------')

/**
 * 可选链运算符 ?.
 */
let stu1 = {
    name: "张三",
    address: {
        city: '北京'
    }
}

let stu2 = {
    name: "李四"
}

let stu3 = {
    name: "李四",
    address: null
}

function test3(stu) {
    // console.log(stu.address.city) // 有问题
    console.log(stu.address?.city)
}

test3(stu1)
test3(stu2) // undefined
test3(stu3) // undefined

console.log('----------')

/**
 * 展开运算符 ...
 */
// 作用 1：打散数组，把元素传递给多个参数
let arr = [1, 2, 3]
function test4(a, b, c) {
    console.log(a, b, c)
}

test4(arr[0], arr[1], arr[2])
test4(...arr) // 输出 1,2,3

// 作用 2：复制数组或对象
let arr1 = [1, 2, 3]
let arr2 = [...arr1]
console.log(arr2) // [1, 2, 3]

let obj1 = {
    name: '张三',
    age: 18
}

let obj2 = {
    ...obj1,
    address: '北京'
}

console.log(obj2)

// 展开运算符复制属于浅拷贝
let o1 = {
    name: '张三',
    address: {
        city: '北京'
    }
}

let o2 = { ...o1 }
console.log(o2)
console.log(typeof o2.address) // object

o1.address.city = '成都'
console.log(o1)
console.log(o2) // o2的city跟着变成‘成都’

let o3 = {
    ...o1,
    address: {
        ...o1.address
    }
}
console.log(o3)
console.log(typeof o3.address) // object

// 作用 3：合并数组或对象
let a1 = [1, 2];
let a2 = [3, 4];
let b1 = [...a1, ...a2] // [1, 2, 3, 4]
console.log(b1)
let b2 = [...a2, 5, ...a1] // [3, 4, 5, 1, 2]
console.log(b2)

let o4 = {name: '张三'};
let o5 = {age: 18};
let o6 = {name: '李四'};
let n1 = {...o4, ...o5}
console.log(n1) // {name: '张三', age: 18}
// 复制对象时出现同名属性，后面的会覆盖前面的
let n2 = {...o4, ...o5, ...o6}
console.log(n2) // {name: '李四', age: 18}

console.log('----------')

/**
 * 解构赋值运算符
 */
// [] 用于数组的解构赋值
let arr3 = [1, 2, 3]
let [a, b, c] = arr3
console.log(a, b, c)

function test5([a, b, c]) {
    console.log(a, b, c)
}
test5(arr3)

let obj3 = {
    name: '张三',
    age: 18
}
// 变量名称需要和对象属性名字一致
let {name, age} = obj3
console.log(name, age)

function test6({name, age}) {
    console.log(name, age)
}
test6(obj3)