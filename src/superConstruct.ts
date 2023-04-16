// super constructor

export class Users {
   name: string;

   constructor(name: string, public age: number) {
      this.name = name;
   }

   setName(name: string): void {
      this.name = name;
   }

   getName = (): string => {
      return this.name;
   };
}
class Admin extends Users {
   read: boolean = true;
   write: boolean = true;
   phone: number;
   private _email: string = "";

   constructor(phone: number, name: string, age: number) {
      super(name, age);
      this.phone = phone;
   }

   getRole(): { read: boolean; write: boolean } {
      return {
         read: this.read,
         write: this.write,
      };
   }

   set email(value: string) {
      if (value.length < 3) {
         console.log("karakter minimal 3");
      } else {
         this._email = value;
      }
   }

   get email(): string {
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
