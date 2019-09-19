#!/usr/bin/env ts-node
/**
 * tsdemo-2：打印族谱
 */

//创建前缀
function createPrefix(n: number) {
  return "----".repeat(n)
}

class Person {
  constructor(public name) { }
  public children: Person[] = []

  //介绍家族中人
  introduceFamily(n?: number) {
    n = n || 1
    console.log(`${createPrefix(n - 1)}${this.name}`)
    this.children.forEach(child => {
      child.introduceFamily(n + 1)
    })
  }

  addChild(child: Person) {
    this.children.push(child)
  }
}

let grandPa = new Person('皇上')
let son1 = new Person('王爷1')
let son2 = new Person('王爷2')
let grandSon1 = new Person('王世子1')
let grandSon2 = new Person('王世子2')
let grandSon3 = new Person('王世子3')
let grandSon4 = new Person('王世子4')

grandPa.addChild(son1)
grandPa.addChild(son2)

son1.addChild(grandSon1)
son1.addChild(grandSon2)

son2.addChild(grandSon3)
son2.addChild(grandSon4)

grandPa.introduceFamily()