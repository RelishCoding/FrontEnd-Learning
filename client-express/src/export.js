// 单个导出
export const a1 = 10
export let b1 = 20

export function c1() {
    console.log('c1')
}

// 一起导出
const a2 = 30
let b2 = 40
function c2() {
    console.log('c2')
}
export {a2, b2, c2}

// 导出默认
let b3 = 50
export default b3