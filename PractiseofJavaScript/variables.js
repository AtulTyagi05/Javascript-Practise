// var Scope

// We can re-declare the varibale in case of var or we can re-assign the value of same variable
var a = 5
var a = 6
console.log(a);


function fun(){
    var b = 10;
    console.log(b);
}
fun();
//  console.log(b);  --- We can not print the b after the block - its gives error b is not defined

// let
// let c = 5;
// let c = 6; 
// We can't re-declared the variable in case of let.

let c = 6;
c = 10;
console.log(c); // We can re-assign the value in case of let

let days1 = 7;
days1 = 10 // We can re-assign the value in case of const. its give error Assignment to constant variable
console.log(100 * days1);


// Const

const d = 10;
// const d = 15;
// d = 15;  --- We can't re-declared the variable in case of const
// We can't re-assign the value in case of const
const days = 7;
// days = 10 // We can't re-assign the value in case of const. its give error Assignment to constant variable
console.log(100 * days);




