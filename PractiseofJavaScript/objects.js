//How to declare and use objects

//How to use symbol and pass into the object

 const mysym = Symbol("mySymbol")
const myObject = {
    name : "Atul Tyagi",
    age : 35,
    occupation: "Software Developer",
    hobbies: ["coding", "reading", "gaming"],
    isActive: true,
    address: { street: "123 Main St", city: "Ghaziabad", zip: "12345" }, 
    favoriteColor: "blue",
    phoneNumber: "555-1234",
    email: "atul.tyagi@example.com",
    dateOfBirth: "1993-01-01",
    gender: "male",
    nationality: "Indian",
    isEmployed: true,
    [mysym] : "Symbol" 

}

// console.log(myObject.name); // First way to acces the object value
// console.log(myObject["occupation"]); // Second way to acces the object value
// console.log(`My Nationality is ${myObject.nationality}`); // Third way to use  object

// myObject.name = "Guddu";
// console.log(myObject);

// Object.freeze(myObject);  // Freez the object - After this we can't chnage the value of object
// myObject.name = "Atul Tyagi";
// console.log(myObject);

// console.log(myObject[mysym]);
// console.log(typeof mysym);

//Another way to access the values
const {name} = myObject
console.log(name);





