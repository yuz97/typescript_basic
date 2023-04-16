class Mahasiswa2 {
   public name: string;

   constructor(name: string, public age: number) {
      this.name = name;
      this.age = age;
   }

   getName = (): string => {
      return this.name;
   };

   setName = (name: string): void => {
      this.name = name;
   };

   getUmur = (): number => {
      return this.age;
   };

   setUmur = (age: number): void => {
      this.age = age;
   };
}

class Orang extends Mahasiswa2 {
   read: boolean = true;
   jurusan: string = "informatika";

   getMahasiswa(): { read: boolean; jurusan: string } {
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
