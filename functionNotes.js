/*
A function is a set f instructions that are all packed together
Useful for repetition of actions

Function Name
DD
Parameters

Arguments

function functionName(parameter1, parameter2){
    code
} 

functionName(argument1, argument2)
*/

//favorite animal

// function favoriteAnimal(animal){
//     return animal + " is my favorite specimen"
// }

// console.log(favoriteAnimal("your mother"))

//what happens in a function is invisible to the oustide world
//local scope- within a funtion
//global scope- all of the main program

let test1 = 1
let test2 = 5

function add1 (num){
    test2= test2 +1
    return num+1
}
console.log(add1(test2));

// can change var iff said by name in function 
//we can make optional parameters 
// to do this when you make the parameter you ca assign a default value to it

function greetings(name = "Andrew"){
    console.log (` hello ${name}`)
}
greetings ("mr smith")
greetings ()