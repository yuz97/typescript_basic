"use strict";
// super constructor
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.Users = Users;
class Admin extends Users {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    set email(value) {
        if (value.length < 3) {
            console.log("karakter minimal 3");
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin(399293, "tonie", 22);
console.log(admin.getName());
console.log(admin.name);
console.log(admin.age);
console.log(admin.phone);
// admin.email = "yusri@gmail.com";
admin.email = "yu";
console.log(admin.email);
