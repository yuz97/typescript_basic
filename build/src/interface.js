"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("laptop nyala");
    }
    off() {
        console.log("laptop mati");
    }
}
let asus = new Asus("asus rog", true);
asus.on();
console.log(asus);
