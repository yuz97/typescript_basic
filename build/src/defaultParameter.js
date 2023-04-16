"use strict";
// default params
const fullName = (first, last = "warrayhan") => {
    return `my firstname ${first} and lastname ${last}`;
};
console.log(fullName("yusri"));
// mengubah params jadi undifined saat params kosong /tidak diisi
// const myName = (name: string, age: number?): string => {
//    return `my name is ${name} and my age ${age}`;
// };
// console.log(myName("ridwan"));
// console.log(myName("ridwan", 22));
