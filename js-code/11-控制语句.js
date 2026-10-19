/**
 * for in
 */
// for in主要用来遍历对象
let father = { name: '张三', age: 18, study: function () { } }

for (const n in father) {
    console.log(n) // name, age, study
}

// 遍历子对象时，父对象的属性会跟着遍历出来
let son = Object.create(father)
son.sex = '男'

for (const n in son) {
    console.log(n) // name, age, study, sex
    // 在for in内获取属性值，要使用 [] 语法，而不能用 . 语法
    console.log(son.n) // undefined
    console.log(son[n]) // 张三, 18, ƒ () { }, 男
}

console.log('----------')

/**
 * for of
 */
// 主要用来遍历数组，也可以是其它可迭代对象，如 Map、Set 等
let a1 = [1, 2, 3]
for (const i of a1) {
    console.log(i)
}

let a2 = [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 },
    { name: '王五', age: 22 }
]
for (const obj of a2) {
    console.log(obj.name, obj.age)
}

// 使用{}解构赋值运算符配合for循环
for (const { name, age } of a2) {
    console.log(name, age)
}

/**
 * try catch
 */
let stu1 = { name: '张三', age: 18, address: { city: '北京' } }
let stu2 = { name: '张三', age: 18 }

function test(stu) {
    try {
        console.log(stu.address.city)
    } catch (e) {
        console.log('出现了异常：' + e.message)
    } finally {
        console.log('finally')
    }
}

test(stu1)
test(stu2) // 出现了异常：Cannot read properties of undefined (reading 'city')