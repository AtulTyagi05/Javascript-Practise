// find out the minimum number from Array through reduce function

let number = [25,30,5,4,90,8,99]
// let min = number.reduce((a,b) => Math.min(a,b))
// console.log(min);

let min = number.reduce((min,num) => {

    if(min < num)
        return min;
   else {
        return num;
    }
}, number[0])

console.log("Print the Minimum number in the Array " +  min);

// find out the maximum number from Array through reduce function

let maxArray = [6,8,1,3,88,99,101,5]

let max = maxArray.reduce((max,num) => {

    if(max > num)
        return max;
    else{
        return num;
    }
}, maxArray[0])

console.log(" Print the Maximum number in the Array " + max)