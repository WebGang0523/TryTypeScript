"use strict";
// 布尔值
let isDone = false;
// 类型推断
let isOver = false;
// 数值
let age = 37;
// 字符串
let username = 'xucg';
// 模板字符串定义多行文本和内嵌表达式
let sentence = `Hello, my name is ${username}.
I'll be ${age + 1} years old next month.`;
// 数组
let list = [1, 2, 3];
let list1 = [1, 2, 3];
// 元组
let x = ['xucg', 30];
// 枚举,默认情况下，从0开始为元素编号
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
let c = Color.Red;
let ColorName = Color[2]; // 'Green'
// any，相当于关闭了类型检测
let notSure = 4;
notSure = 'maybe a string instead';
let list2 = [1, true, 'free'];
c = notSure; // any类型可以赋值给其他类型
// void,声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
function warnUser() {
    console.log('This is my warning message');
}
// Null 和 Undefined
let u = undefined;
let n = null;
// never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 联合类型
let unionC;
let gender;
create({ prop: 0 }); // OK
create(null); // OK
let obj; // ? 标识可选
let obj2;
// 类型断言
let someValue = 'this is a string';
let strLength = someValue.length;
// let someValue: any = 'this is a string'
// let strLength: number = (someValue as string).length
// unknow
let cUnknow;
// c = cUnknow  unknow类型不可以直接赋值给其他类型
c = cUnknow;
c = cUnknow;
// 函数
let fun1;
let my1;
