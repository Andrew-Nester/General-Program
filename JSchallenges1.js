//3

// let x2 = 0
// let x1 = 1
// let x0 = 1
// let total = 0
// function fib(max){
//     total = 0
//     while (true){
//         x0 = x1 + x2
//         if (x0 > max){
//             x0 = 1
//             x1 = 1
//             x2 = 0
//             console.log(`the total of the even fib numbers up to ${max} is: ${total}`)
//             break
//         }
//         x2 = x1
//         x1 = x0
//         console.log (x0)
//         if (x0 % 2 == 0){
//             total = total + x0
//         }
//     }
// }

//4
// function factorize(input){
//     console.log(1)
//     if (input <= ((2**53)-1)){
//         let inputmod = input
//         for(let a = 2; a <= inputmod; a++){
//             if (inputmod % a == 0){
//                 console.log (a)
//                 inputmod = inputmod/a
//                 a = a - 1
//             }SSS
//         }
//     }else{ 
//         alert("TOO LARGE")
//     }
// }

//1
let layer = []
function mario(){ 
    let height = +prompt("insert desired height")
    let pg = prompt("insert p for an incline or g for a gapped pyramid")
    height = height+1
    if (pg == "p"){
        for(let constructed = 0; constructed < height; constructed++){
            for(let continues = height-constructed; continues > 0; continues = continues - 1){
                layer[layer.length] = " "
            } for(let filledcontinues = constructed; filledcontinues > 0; filledcontinues = filledcontinues - 1)
                layer[layer.length] = "#"
            done = layer.join("")
            console.log(done)
            layer = []

        }
    }
    if(pg == "g"){
        for(let constructed = 0; constructed < height; constructed++){
            for(let continues = height-constructed; continues > 0; continues = continues - 1){
                layer[layer.length] = " "
            } for(let filledcontinues = constructed; filledcontinues > 0; filledcontinues = filledcontinues - 1)
                layer[layer.length] = "#"
                partone = layer.join("")
                parttwo = " "
                partthree = layer.reverse()
                partthree = partthree.join("")
                complete = partone + parttwo + partthree
                console.log (complete)
                layer = []

        }
    
    }
}
