"use strict";
//enum
// numeric enum
var Month;
(function (Month) {
    //    january,
    Month[Month["january"] = 0] = "january";
    Month[Month["february"] = 1] = "february";
    Month[Month["march"] = 2] = "march";
    Month[Month["april"] = 1] = "april";
    Month[Month["may"] = 2] = "may";
    Month[Month["juny"] = 3] = "juny";
    Month[Month["july"] = 4] = "july";
})(Month || (Month = {}));
console.log(Month);
console.log(Month[3]);
console.log(Month.may);
