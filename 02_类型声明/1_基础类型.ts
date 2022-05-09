// 布尔值
let isDone: boolean = false
// 类型推断
let isOver = false
// 数值
let age: number = 37
// 字符串
let username: string = 'xucg'
// 模板字符串定义多行文本和内嵌表达式
let sentence: string = `Hello, my name is ${username}.
I'll be ${age + 1} years old next month.`
// 数组
let list: number[] = [1, 2, 3]
let list1: Array<number> = [1, 2, 3]
// 元组
let x: [string, number] = ['xucg', 30]
// 枚举,默认情况下，从0开始为元素编号
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Red
let ColorName: string = Color[2] // 'Green'
// any，相当于关闭了类型检测
let notSure: any = 4
notSure = 'maybe a string instead'
let list2: any[] = [1, true, 'free']
c = notSure // any类型可以赋值给其他类型
// void,声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
function warnUser(): void {
  console.log('This is my warning message')
}
// Null 和 Undefined
let u: undefined = undefined
let n: null = null
// never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}
// 联合类型
let unionC: string | boolean
let gender: 'male' | 'female'
// object
declare function create(o: object | null): void
create({ prop: 0 }) // OK
create(null) // OK
let obj: { name: string; age?: number } // ? 标识可选
let obj2: { name: string; [propName: string]: any }
// 类型断言
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

// let someValue: any = 'this is a string'
// let strLength: number = (someValue as string).length

// unknow
let cUnknow: unknown
// c = cUnknow  unknow类型不可以直接赋值给其他类型
c = <Color>cUnknow
c = cUnknow as Color

// 函数
let fun1: (a: number, b: number) => number

// 类型别名
type MyType = 1 | 2 | 3
let my1: MyType
