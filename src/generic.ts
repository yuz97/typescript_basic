function getData(value: any) {
   return value;
}

console.log(getData("ini adalah data"));
console.log(getData(21234));
console.log(getData("ini adalah data").length);

// method biasa
function myData<T>(value: T) {
   return value;
}

//syntax es6
const myData2 = <T>(value: T) => {
   return value;
};
