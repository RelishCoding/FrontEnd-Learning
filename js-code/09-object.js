/**
 * 对象的创建
 */
let stu1 = {
    name: '小明',
    age: 18,
    study: function() {
        console.log(this.name + '爱学习')
    }
}

console.log(stu1.name)
console.log(stu1.age)
stu1.study()

console.log('----------')

let name = '小黑'
let age = 20
let study = function() {
    console.log(this.name + '爱学习')
}
let stu2 = {
    name,
    age,
    study
}
console.log(stu2.name)
console.log(stu2.age)
stu2.study()

console.log('----------')

let stu3 = {
    name: '小红',
    age: 18,
    study() {
        console.log(this.name + '爱学习')
    }
}
console.log(stu3.name)
console.log(stu3.age)
stu3.study()

console.log('----------')

let stu4 = {
    _name: null, // 类似于Java中私有成员变量
    get name() { // 读取属性
        console.log('进入了get')
        return this._name
    },

    set name(value) { // 设置属性
        console.log('进入了set')
        this._name = value
    }
}

stu4.name = '小白' // 输出：进入了set
console.log(stu4.name) // 输出：进入了get，小白
console.log(stu4._name) // 小白
stu4._name = "zhangsan"
console.log(stu4._name)

console.log('----------')

/**
 * 属性的增删
 */
let stu5 = {name: '张三'}
stu5.age = 22
console.log(stu5) // {name: '张三', age: 22}
delete stu5.age
console.log(stu5) // {name: '张三'}
stu5.study = function() {
    console.log(this.name + '在学习')
}
stu5.study() // 张三在学习

let stu6 = {_name: null}
Object.defineProperty(stu6, 'name', {
    get() {
        return this._name
    },
    set(name) {
        this._name = name
    }
})
stu6.name = '李四'
console.log(stu6.name)

console.log('----------')

/**
 * this的用法
 */
function study1(subject) {
    console.log(this.name + '在学习' + subject)
}
study1("JavaScript") // 在学习JavaScript
window.name = '我是window'
study1("JavaScript") // 我是window在学习JavaScript

let stu7 = {
    name: '小红',
    study1
}
stu7.study1("JavaScript") // 小红在学习JavaScript

let stu8 = {name: '小明'}
study1.call(stu8, "JavaScript") // 小明在学习JavaScript

let stu9 = {
    name: "小花",
    friends: ["小白", "小黑", "小明"],
    // play: function() {
    play() {
        this.friends.forEach(function(e) {
            console.log(this.name + "与" + e + "在玩耍");
        });
    }
}
stu9.play() // 我是window与小白在玩耍，我是window与小黑在玩耍，我是window与小明在玩耍

let stu10 = {
    name: "小花",
    friends: ["小白", "小黑", "小明"],
    play() {
        this.friends.forEach(e => {
            console.log(this.name + "与" + e + "在玩耍");
        })
    }
}
stu10.play() // 小花与小白在玩耍，小花与小黑在玩耍，小花与小明在玩耍

let stu11 = {
    name: "小花",
    friends: ["小白","小黑","小明"],
    play() {
        let me = this
        this.friends.forEach(function(e) {
            console.log(me.name + "与" + e + "在玩耍");
        })
    }
}
stu11.play()

console.log('----------')

/**
 * 原型继承
 */
let father = {
    f1: '父属性',
    m1: function() {
        console.log("父方法")
    }
}

let son = Object.create(father)
console.log(son.f1) // 父属性
son.f2 = '子属性'
console.log(son.f2) // 子属性
son.f1 = '子属性'
console.log(son.f1) // 子属性
son.m1()
console.dir(son)

console.log('----------')

/**
 * 基于函数的原型继承
 */
function cons(f2) {
    // 创建子对象(this), 给子对象提供属性和方法
    this.f2 = f2
    this.m2 = function() {
        console.log("子方法")
    }
}

// cons.prototype 就是父对象
cons.prototype.f1 = '父属性'
cons.prototype.m1 = function() {
    console.log("父方法")
}

let son1 = new cons('子属性')
console.log(son1.f2) // 子属性
son1.m2() // 子方法
console.log(son1.f1) // 父属性
son1.m1() // 父方法
console.dir(son1)

console.log('----------')

/**
 * JSON 与 JavaScript 对象
 */
let json = `{
    "name": "张三",
    "age": 18
}`
console.log(json)
console.dir(json)
console.log(json.name) // undefined
console.log(json.age) // undefined

let obj = {
    name: "张三",
    age: 18,
}
console.log(obj)
console.dir(obj)
console.log(obj.name)
console.log(obj.age)

let obj2 = JSON.parse(json)
console.log(obj2)
console.dir(obj2)
console.log(obj2.name)
console.log(obj2.age)

let str = JSON.stringify(obj)
console.log(str)