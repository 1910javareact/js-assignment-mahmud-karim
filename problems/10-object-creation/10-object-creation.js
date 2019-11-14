/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
//object literal
let my = {
    name: 'Mahmud',
    age: 23
}
//constrctor function
function Student(name, age){
    this.name = name
    this.age = age
}
let student = new student('Mahmud', 23)
//es6 classes
class Cactus{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
let plant = new Cactus('Saguaro', 300)