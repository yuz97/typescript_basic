type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
   return val1 + val2;
};

console.log(Add(4, 4));
