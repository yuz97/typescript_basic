export class Buahx {
   name: string;
   price: number;
   static getName: string = "Anggur";

   constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
   }

   getbuahName(): { name: string; price: number } {
      return {
         name: this.name,
         price: this.price,
      };
   }

   set buahName(name: string) {
      this.name = name;
   }
   get buahName() {
      return this.name;
   }

   set buahPrice(price: number) {
      this.price = price;
   }

   get buahPrice(): number {
      return this.price;
   }
}

let apel = new Buahx("apel", 2000);
console.log(apel);
console.log(apel.getbuahName());

//penggunaan setter dan getter
apel.buahName = "jeruk";
console.log(apel.buahName);

let buah3 = Buahx.getName;
console.log(buah3);
