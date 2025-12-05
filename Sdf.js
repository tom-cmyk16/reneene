// let age=25;
// let T=`I am ${age} years old.`;
// console.log(T);
class Car {
    constructor(name, model, year) {  
        this.name = name;
        this.model = model;
        this.year = year; 
}
getCarInfo() {
    return `this is ${this.name} and Models of ${this.model} it biulds ${this.year} Year`;

}

}
// let myCar = new Car("Ford", "Mustang", 1969);
// console.log(myCar);

class NewCar extends Car {
    constructor(name, model, year, color) {
        super(name, model, year);
        this.color = color;
} 

ageOfCar() {
    let date = new Date();
    return date.getFullYear() - this.year;      

}}
let myNewCar = new NewCar("Toyota", "Corolla", 2015, "Red");
console.log(myNewCar)
console.log(myNewCar.getCarInfo());
console.log(`Age of Car: ${myNewCar.ageOfCar()} years`);
