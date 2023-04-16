import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);
console.log(asus.a());

let mac = new Macbook("macbook air", false, false);
console.log(mac);
console.log(mac.b());
