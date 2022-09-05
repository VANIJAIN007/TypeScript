//immutable,order matters

let tuple:[number,string,number]=[123,"abc",456];
tuple.push("jkk");
console.log(tuple);

let tuple1:readonly[number,string,number]=[123,"abc",456];

console.log(tuple1);