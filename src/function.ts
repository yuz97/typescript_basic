// tipe data pada balikan function

function getName(name: string) {
   console.log(`nama saya adalah ${name}`);
}

getName("Monkey D luffy");
getName("Monkey D Dragon");

function getTambah(num1: number, num2: number) {
   return num1 + num2;
}

console.log(getTambah(4, 3));

function getFruiteDetail(name: string, price: number) {
   console.log(`ini adalah buah ${name} dan harganya ${price}`);
}

getFruiteDetail("apel", 2000);
getFruiteDetail("semangka", 10000);
