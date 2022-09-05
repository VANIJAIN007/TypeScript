function add(x:number,y:number){
    return x+y;
}
let no=add(5,10);
console.log(no);
console.log(add(5,10));

function add1(x:string,y:string):string{
    return x+y;
}
let no1=add(5,10);
console.log(no1);
console.log(add1("5","10"));

let sub=(x:number,y:number):void=>console.log(`Result ${x+y}`);
sub(5,12);