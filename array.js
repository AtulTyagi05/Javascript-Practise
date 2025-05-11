//Array

let names = ["Atul", "Ravi", "Subodh", "Guddu"];
let days =  ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday"];

names.push("Arun");
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);

names.unshift("Atul");
console.log(names);

names.splice(1,2,"Arun", "Santosh", "Ashwani");
console.log(names);

let newName = names.slice(1,3);
console.log(newName);

// let newArray = names.concat(days)
// console.log(newArray);

let newindex = names.indexOf("Arun");
console.log(newindex);

let includeArray = names.includes("Arun","Santosh");
console.log(includeArray);

