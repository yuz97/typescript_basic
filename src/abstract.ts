abstract class Vehicle {
   abstract wheels: number;

   start(): void {
      console.log("bruummm");
   }
   getmotorSound() {
      console.log("wkkkw");
   }
}

class Car extends Vehicle {
   wheels: number = 4;
}

class Motor extends Vehicle {
   wheels: number = 2;
}

let car = new Car();
car.wheels;
car.start();

let motor = new Motor();
motor.getmotorSound();
