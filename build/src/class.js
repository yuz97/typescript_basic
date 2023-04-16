"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
let nama1 = new User("yusri");
console.log(nama1);
console.log(nama1.name);
class Mahasiswa {
    constructor(name, jurusan) {
        this.jurusan = jurusan;
        this.name = name;
        this.jurusan = jurusan;
    }
}
let mhs1 = new Mahasiswa("ridwan", "informatika");
console.log(mhs1);
