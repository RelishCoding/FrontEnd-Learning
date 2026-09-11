let s1 = "string1"
console.log(s1)

let s2 = 'string2'
console.log(s2)

let s3 = `string3`
console.log(s3)

// 需求：拼接 URI 的请求参数
let name = 'zhangsan'
let age = 18

// 传统方法拼接
let uri1 = '/test?name=' + name + '&age=' + age
console.log(uri1)

// 模板字符串
let uri2 = `/test?name=${name}&age=${age}`
console.log(uri2)