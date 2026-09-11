console.log(1);  	// 函数没有返回值, 结果是undefined

let d = 10;		 	// 表达式没有返回值, 结果是undefined

let e = [1, 2, 3];
console.log(e[10]); // 数组未定义元素是undefined

let g = { "name": "张三" };
console.log(g.age); // 对象未定义属性是undefined

let h;
console.log(h);		// 变量未初始化是undefined
// console.log(h.length); // 报错

let i = null;
console.log(i);
// console.log(i.length) // 报错