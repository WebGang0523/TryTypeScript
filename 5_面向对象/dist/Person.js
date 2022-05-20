"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello(word) {
        console.log(word);
    }
}
Person.age = 20;
const p = new Person('xucg');
p.sayHello('你好');
