// function userLogin(username)
// {
//     if(!username)
//     {
//       console.log("Please enter the username");
//       return
      
//     }
// //    console.log("Username ", username);
// return `${username}  just logged in`

// }

// console.log(userLogin("Atul"));

// const userName = {

//   username: "Atul Tyagi",
//   price : 999,

//   welcomeMessage: function(){

//     console.log(`${this.username}, welcome to my Channel.Please pay the ${this.price}`);
//     console.log(this); // This give the current object value menas it gives the current context
//   }
// }

// // userName.welcomeMessage()

// // console.log(this);  //It gives the empty object

// //First way to define the message
// function addNum(a,b){

//   let c = a + b;
//   console.log(("Print the value of " ,c));
  
// }
// addNum(5,9)

//Second way 
function addNum1(a,b){
  return a + b; 
}
// console.log(addNum1(5,5));

let c = addNum1(5,5)
// console.log("Print the value of c " ,c);

let d = c +10;

//  console.log("Print the value of d " ,d);
 

//Arrow functions
 const adding = (a,b) => (a + b)
console.log(adding(2,3))