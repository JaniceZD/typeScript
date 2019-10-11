/**
 * 声明一个接口 InterfaceA
 * 这个接口的属性有
 * 属性 num，类型为 number
 * 属性 b，类型为布尔
 * 属性 str，类型为字符串
 * 属性 optional，类型为字符串，但是此属性是可选的
 * 属性 add，是一个函数，接收的参数有 n1 和 n2，n1 是一个数字，n2 也是一个数字，返回值是一个数字
 * 属性 r，类型为字符串，但是此属性是只读的 
*/

interface InterfaceA {
  num: number;
  b: boolean;
  str: string;
  optional?: string;
  add(n1: number, n2: number): number;
  readonly r: string;
}

let test: InterfaceA = {
  num: 1,
  b: true,
  str: 'hi',
  add(a: number, b: number) {
    return a + b
  },
  r: 'hi'
}

console.log(test.add(1, 2))