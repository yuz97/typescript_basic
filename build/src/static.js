"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buahx = void 0;
class Buahx {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getbuahName() {
        return {
            name: this.name,
            price: this.price,
        };
    }
    set buahName(name) {
        this.name = name;
    }
    get buahName() {
        return this.name;
    }
    set buahPrice(price) {
        this.price = price;
    }
    get buahPrice() {
        return this.price;
    }
}
Buahx.getName = "Anggur";
exports.Buahx = Buahx;
let apel = new Buahx("apel", 2000);
console.log(apel);
console.log(apel.getbuahName());
//penggunaan setter dan getter
apel.buahName = "jeruk";
console.log(apel.buahName);
let buah3 = Buahx.getName;
console.log(buah3);
