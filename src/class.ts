class User {
   public name: string;

   constructor(name: string) {
      this.name = name;
   }
}
let nama1 = new User("yusri");
console.log(nama1);
console.log(nama1.name);

class Mahasiswa {
   public name: string;

   constructor(name: string, public jurusan: string) {
      this.name = name;
      this.jurusan = jurusan;
   }
}

let mhs1 = new Mahasiswa("ridwan", "informatika");
console.log(mhs1);
