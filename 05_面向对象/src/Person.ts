class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  static age: number = 20

  sayHello(word: string): void {
    console.log(word)
  }
}

const p = new Person('xucg')
p.sayHello('你好')
