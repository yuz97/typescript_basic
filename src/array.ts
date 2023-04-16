let array: number[] = [1, 2, 3];
// array = ["apel", "jeruk", "semangka"]; error
console.log(array);

let array2: string[] = ["apel", "anggur", "alpukat"];
// let array2: number[] = [2,3,4]; error
console.log(array2);

let array3: [number, string] = [1, "semangka"];
// let array3: [number, string] = ["semangka",1] error;
console.log(array3);

let array4: any[] = ["semangka", {}, [], 123];
console.log(array4);
