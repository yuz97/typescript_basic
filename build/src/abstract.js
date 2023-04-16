"use strict";
class Vehicle {
    start() {
        console.log("bruummm");
    }
    getmotorSound() {
        console.log("wkkkw");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motor extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
car.wheels;
car.start();
let motor = new Motor();
motor.getmotorSound();
