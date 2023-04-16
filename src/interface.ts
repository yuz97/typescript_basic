interface laptop {
   name: string;
   on(): void;
   off(): void;
}

class Asus implements laptop {
   name: string;
   isGaming: boolean;

   constructor(name: string, isGaming: boolean) {
      this.name = name;
      this.isGaming = isGaming;
   }
   on(): void {
      console.log("laptop nyala");
   }
   off(): void {
      console.log("laptop mati");
   }
}

let asus = new Asus("asus rog", true);
asus.on();
console.log(asus);
