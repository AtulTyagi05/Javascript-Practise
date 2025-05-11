//For of loop

const arr = [1,2,3,4,5,6,7,8,9]
for (const element of arr) {
    // console.log("Print the value of array " ,element); 
}

let superPlayer = ["Sachin", "Saurav", "Rahul", "Virat", "Rohit", "Virender"]

for (const player of superPlayer) {
    // console.log(`Print the list of Players ${player}`);
    // console.log("Print the list of players ", player);
    
}


//For loop
let team = ["Sachin", "Saurav", "Rahul", "Virat", "Rohit", "Virender"]
for (let index = 0; index < team.length; index++) {
    const element = team[index];
    
    // console.log(element);
    }

    
// For in Loop    
// This only prints the keys of Array
    let testTeam = ["Sachin", "Saurav", "Rahul", "Virat", "Rohit", "Virender"]
    for (const key in testTeam) {
    
        // console.log(key);
        
    }

    // This print the complete Array
    let onedayTeam = ["Sachin", "Saurav", "Rahul", "Virat", "Rohit", "Virender"]
    for (const key in testTeam) {
    
        // console.log(onedayTeam);
        
    }

    //This Print the Key and Values together
    let onedayTeam1 = ["Sachin", "Saurav", "Rahul", "Virat", "Rohit", "Virender"]
    for (const key in onedayTeam1) {
    
        // console.log( key + " - " + onedayTeam1[key]);
        
    }

    const run = [

        {
            run : "Atul",
            speed : "60 KM/h"
        },
        {
            run : "Guddu",
            speed : "60 KM/h"
        },
        {
            run : "Subodh",
            speed : "60 KM/h"
        }
    ]

    // run.forEach( (item) => {

    //     console.log(item.run1);
        
    // })

    run.forEach( (item) => {
        console.log(item.run);
    })
    