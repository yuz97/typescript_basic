// Object

// cara 1
let user = {
   name: "Komang",
   age: 22,
   address: "maros",
};
// user = {
//    school: "sma 1 maros",
// };  error

user = {
   name: "rudi",
   age: 27,
   address: "makassar",
};

console.log(user);

// cara 2

type Fruit = {
   name: string;
   price: number;
};

let buahs: Fruit = {
   name: "apel",
   price: 2000,
};

console.log(buahs);
