"use strict";
class Mahasiswa2 {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.setName = (name) => {
            this.name = name;
        };
        this.getUmur = () => {
            return this.age;
        };
        this.setUmur = (age) => {
            this.age = age;
        };
        this.name = name;
        this.age = age;
    }
}
class Orang extends Mahasiswa2 {
    constructor() {
        super(...arguments);
        this.read = true;
        this.jurusan = "informatika";
    }
    getMahasiswa() {
        return {
            read: this.read,
            jurusan: this.jurusan,
        };
    }
}
let orang = new Orang("yusri", 25);
console.log(orang);
orang.setName("ridwan");
orang.setUmur(27);
console.log(orang.getName());
console.log(orang.getUmur());
console.log(orang.getMahasiswa());
