
//COnditional notes in JS

//In conditional statement is just an if/then
// there are many more complex examples, but all of them are based on if a condition is true and responding
// rely on some form of comparison
/*
/*
comparisons in JS look like math equations to an extent
a < b is an example
a > b is another
a == b
a <= b
a >= b

*/

// examples
// let a = 2+3;
// console.log ( 5 < 3 );
// console.log (5 > 3);
// console.log (a == 5);
// console.log (a == "5");

// //JS has a triple equal sign for strict equality
// console.log ( a === "5");

//The last symbol that we need to talk about before jumping into conditionals is !
// it means NOT
// let a = 5 
// console.log(a != 3);

//you acn compare srings like numbers
// console.log("Badin">"Badin");
//1. compare the first character of each string earlier in alphabet is smaller
//if they are = continue to next step
// compare the 2nd character of each string 
//inverse alphabetical order
// longer string wins if they are toherwise the same

// if (3<5){
//     console.log( "3 is less than 5")
// }

// if (7<5){
//     console.log(" 7 is less than 5")
// } else {
//     console.log ("7 isn't less than 5")
// }

// // a test for equaliy 
// let testNumber = 2;

// if(testNumber > 6){;
//     console.log(`${testNumber} > 6`);
// } else {;
//     if(testNumber < 6){
//         console.log(`${testNumber} < 6`);
//     } else {;
//         console.log(`${testNumber} = 6`);
// };
// };

// better approaches

// if - else if - else
/*
let testGrade = 48;
if(testGrade >= 90){
    console.log(" you get an A");
} else if(testGrade >= 80){
    console.log( "you get a B");
} else if( testGrade >= 70){
    console.log(" you get a C");
} else if( testGrade >= 60){
    console.log (" you get a D");
} else{
    console.log( "you get an F");
*/ 
//you must restate ariable every time
//no x = 35 || = 15
//insead x = 35 || x = 15

/* JS uses truthy and falsey values
A truthy value will be treadted the same as true
Following are truthy
true
any not empty string (this includes "false")
any number except 0
arrays functions and objects

Following are falsey
fasle
empty strings
the number 0
null
undefined
not a number
*/
/*
let testVariable = null && false && 0;
console.log (testVariable)

// first truthy number 
// if all are falsey reply the last or

alert("no print")

// and finds the first falsey instead of the first truthey value

console.log ( true && true && true && true);
console.log (true && 0 && true && true);
console.log (true && "false" && 5 && 3.14);
*/

// precedence  ( && is higer than ||)

// This is a NONO    vvvvvvvvvvvvvvv
// some ppl use && instead of if

// special not rules (!)
// takes a single value and does the following
//1. coverts to a boolean
//2. returns the opposite

//if we hvae many possible test cases 
// switch
/*
let day = 5
switch(new Date().getDay()){
    case 0:
        day = "sunday"
        break
    case 1:
        day = "Monday"
        break
    case 2: 
        day = "tuesday"
        break
    case 3:
        day = "wednesday"
        break
    case 4: 
        day = "thursday"
        break
    case 5:
        day = "friday"
        break
    case 6:
        day = "saturday"
        break
    default:
        console.log("not a date")
}
console.log (day)
*/

// let age = 3
// if (!(age >= 14 && age <= 90)){
//     console.log ("you are of a proper age for this establishment")
// }
// The ternary operator allows for simpe and consise if else operaions
// condition ? do this : do this instead

4==6 ? console.log("a"): console.log("b")