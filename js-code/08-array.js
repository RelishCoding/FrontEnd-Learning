// 创建数组
let arr = [1, 2, 3]

// 获取数组元素
console.log(arr[0])

// 修改数组元素
arr[0] = 5
console.log(arr[0])

// 获取数组长度
console.log(arr.length)

// 遍历数组元素，其中 length 是数组属性，代表数组长度
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 向数组尾部(右侧)添加元素
arr.push(4)
console.log(arr) // [5, 2, 3, 4]

// 从数组头部(左侧)移除元素
arr.shift()
console.log(arr) // [2, 3, 4]

// 从【参数1】索引位置往后删除【参数2】个元素
arr.splice(1, 1)
console.log(arr) // [2, 4]

let arr2 = ['a', 'b', 'c']
// 默认使用【,】作为连接符
console.log(arr2.join()) // a,b,c
console.log(arr2.join('')) // abc
console.log(arr2.join('-')) // a-b-c

let arr3 = [1, 2, 3, 6]
function a(i) {
    return i * 10
}
console.log(arr3.map(a)) // [10, 20, 30 ,60]
console.log(arr3.map((i) => { return i * 10 })) // [10, 20, 30 ,60]
console.log(arr3.map(i => i * 10)) // [10, 20, 30 ,60]
console.log(arr3) // [1, 2, 3, 6]

// let tmp = arr3.filter((i) => {return i % 2 == 1})
let tmp = arr3.filter(i => i % 2 == 1)
console.log(tmp) // [1, 3]
console.log(arr3) // [1, 2, 3, 6]

arr3.forEach(i => console.log(i))