//1

function multiply(num1, num2){
    console.log (num1*num2)
}
multiply (9039,89)

//4
//the function will act differently w/o the else becasue it would confirm if parents allowed you even
// if you replied that you were above the ge of eightteen 

//6

function lower(num1, num2) {
    if (num1 > num2)
        console.log(num2);
    if (num2 > num1)
        console.log(num1);
}

lower (99898, 2)

//7

function exponentiate(num1, num2) {
    x = num1 ** num2
    console.log(x)
    console.log ("help me!!")
}

let y = 0
while (y<200){
    exponentiate (y,y)
    y = y + 0.0001
}

