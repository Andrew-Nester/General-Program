// Example 1  (get a number from the user)
/*
let sum = 0
while (true){
    let value = +prompt(" enter a number");
    sum = sum + value
    if (!value){
        break
    }
}
console.log(` sum = `)
console.log(sum)

*/

// example 2 (add numbers from 1 to a given value with a timeout)
/*
let sum = 0;
let max = +prompt(" add the numbers from 1 to what")
let now = Date.now();



for( let i =1;  i <= max; i++){
    sum += i

    if (Date.now() > now+1000){
        alert( "timeout")
        break
    }
   
}
console.log (sum)
*/

//continue is like a lighter version of break
//it ejects you from one loop not out of all of them
//example print just the odd numbers from 1 to 20
// for (let i = 0; i <= 69; i++){
//     if (i %2 == 0){
//         continue;
//     }
//     console.log (i)
// }

//a do while loop is a loop that must execute once

primes = [2]

function prime (num){
    let x = 3
    let y = 2
    // console.log(2)
    while (x<=num){
        while (true){
            if (x < y**2){
                // console.log(x)
                primes[primes.length] = x
                break
            }
            if (x%y==0){
                break
            }else{
                y = y + 1
            }
     
        }
        x = x + 1
        y = 2
    }
}
prime(99)

// let arrayName = [item1, item2, item3, item4]

// let fruits = ["apples", "bananas", "cantalopes", "durians", "lychees"];

// console.log(fruits[2]);
// fruits[5] = "strawberries";
// console.log (fruits.length);
// fruits[fruits.length] = "dragonfruits";

//an array can store elements of any type including mixing types in the same aray

// arraysd = ["apple", 35, true]

// let obj1 = [3,5];
// let obj2 = [7,11];
// let dist = Math.sqrt(((obj1[0]-obj1[1])**2)+((obj2[0]-obj2[1])**2))
// console.log (dist)

function isaprime (num){
    let y = 2
    while (num>y){
        if (num % y == 0){
            console.log(`${num} isn't a prime`)
            break
        }
        if (num-1 == y){
            console.log (`${num} is a prime`)
        }
        y = y + 1
    }
}

// arraymethds
// .pop() returns and deletes last item in array
// .push() adds an element to the array  (fruits.push("watermelon"))
//TO MODIFY THE BEGINNING OF THE ARRAY  USE different methods
// .shift() pop but at the beginning 
// unshift() is push at te beginning 
//push and unshift can add multiple
// fruits.push ("orange", "peach")

// for (let i = 0; 1 < primes.length; i++){
//     console.log (primes[i])
// }
// for (let fruit of fruts){
//     console.log(fruit)
// }

// while(primes){
//     primes.shift()
// }

// let grades = ["A", "A", "B", ,"B", "A"]
// console.log (grades)
// console.log(grades.length)
// let badArray = [];
// badArray[314] = "pie"
// console.log(badArray.length)

/* multidimentional arrays
Array with 2 or more dimensions (made of many arrays)
*/
//(3,4) (1,2) (9,15) (37,11) (215,1)
let coordinates = [
    [3,4],
    [1,2],
    [9,15],
    [37,11],
    [125,1]
]
// console.log (coordinates)
coordinates[4][0]= 21
console.log(coordinates)