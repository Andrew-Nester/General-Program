let x2 = 0
let x1 = 1
let x0 = 1
let total = 0
function fib(max){
    total = 0
    while (true){
        x0 = x1 + x2
        if (x0 > max){
            x0 = 1
            x1 = 1
            x2 = 0
            console.log(`the total of the even fib numbers up to ${max} is: ${total}`)
            break
        }
        x2 = x1
        x1 = x0
        console.log (x0)
        if (x0 % 2 == 0){
            total = total + x0
        }
    }
}

function factorize(input){
    let inputprime = input
    for(let a = 2; a <= input; a++){
        if (inputprime % a == 0){
            console.log (a)
            inputprime = inputprime/a
            a = a - 1
        }
    }
}

function skibidi(){
    toilet()
}
function toilet(){
    skibidi()
}