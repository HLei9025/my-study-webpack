// 项目的 JS 入口文件
console.log('ok')
console.log('test')

import './css/index.css'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

class Person{
    // 使用static关键字，可以定义静态属性，可以直接通过类名，直接访问属性
    // 实例属性：只能通过类的实例才能访问的属性
    static info = {name: 'zs', age: 20}
}
// var p1 = new Person() //class是从后端语言中借鉴过来的
console.log(Person.info) 
//可以通过Babel，将高级的语法转换为低级的语法



/*
注意：json里面不能写注释
*/