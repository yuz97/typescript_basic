console.log("hello world");

//string type
let buah: string = "apel";
buah = "mangga";
console.log((buah = "sirsak"));

//number tyoe
let angka: number = 123;
// angka = "semangka"; //error
angka = 25;
console.log(angka);

// let passingGrade: boolean = true;
// passingGrade = 123 //error
// passingGrade = "hi//error
// console.log(passingGrade);

//boolean type
let passingGrade: boolean = true;
if (passingGrade) {
   console.log("sudah lulus");
} else {
   console.log("masih mahasiswa");
}

//any type
let orange: any = "jeruk";
orange = 123;
console.log(orange);
