"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...element) {
        this.data.push(...element);
    }
    getAll() {
        return this.data;
    }
}
let numbers = new List(1, 3, 45, 6);
// console.log(numbers);
numbers.add(7);
// console.log(numbers);
numbers.addMultiple(8, 9, 10);
// console.log(numbers);
console.log(numbers.getAll());
let random = new List(1, 2, 3, "anggur", "belimbing", "cherry");
console.log(random);
random.add("delima");
random.addMultiple("ikan", "cabe", "tomat", 8, 9);
console.log(random.getAll());
