const Immutable = require('immutable');

var obj = { 1: "one" };

var map = Immutable.Map(obj);
var a=map.get("1"); // "one"
map.get(1);   // undefined
console.log(a);
console.log(map.get(1));
