let arr1:number[]=[1,2,3,4,5];

arr1.push(11);
console.log(arr1);

let arr2:string[]=[];
arr2[0]="jneqjk";
arr2[1]=",nr";
arr2[2]="jbrwjkr";
arr2[3]="ns f";
console.log(arr2);

arr2.forEach((i)=>{
    console.log(i);
})

//Mixed Array

let arr3:(number|string|boolean)[]=[1,2,3,4,"abc","def",true,'a'];
arr3.push(false);
arr3.push("jdhw");

console.log(arr3);


let arr4:readonly number[]=[1,2,3,4,5]; //only read not allowed to update by push because of readonly


// Assignment-2
let assignmentArray:number[]=[1,2,3,4,5];
// output:5,10,15,20,25
