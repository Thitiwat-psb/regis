var array = [2, 5, 9];
var a = array.indexOf(2);     // 0
var b = array.indexOf(7);     // -1
var c = array.indexOf(9, 2);  // 2
var d = array.indexOf(2, -1); // -1
var e = array.indexOf(2, -3); // 0

console.log(a);

console.log(b);
console.log(c);
console.log(d);
console.log(e);

 var obj = { has_thing: true, id: 123 };
 if(obj.has_thing) {
  console.log('true', obj.id);
 }

var aaa = [ { id: 1 }, { id: 2}, { id: 3}, { id: 4 }];
aaa.forEach(function(obj) {
  console.log(aaa + '=' + aaa[obj]);
});

for (var i = 0; i < aaa.length; i++) {
    if (aaa[i].id == 3){
    console.log(aaa[i].id);
    }
}


console.log(aaa.length);
console.log(aaa[1].id);

for (var i in aaa) {
     if (aaa[i].id == 1){
    console.log('bbb = ' + aaa[i].id);
   }
}


 