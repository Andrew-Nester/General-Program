//3

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

//4
function factorize(input){
    console.log(1)
    if (input <= ((2**53)-1)){
        let inputmod = input
        for(let a = 2; a <= inputmod; a++){
            if (inputmod % a == 0){
                console.log (a)
                inputmod = inputmod/a
                a = a - 1
            }
        }
    }else{ 
        alert("TOO LARGE")
    }
}

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

//2
function square(){
    let square = [
        [], [], [], [], [], [], [], [], [], []
    ]
    let makingnumber = 1
    let dimensions = +prompt("What should the side lengths for the square be (max 10)")
    for(let rows = 0; rows < dimensions; rows++){
        for(let rowinputs = 0; rowinputs < dimensions; rowinputs++){
            square[rows][rowinputs] = +prompt(`what should the ${makingnumber} be `)
            makingnumber = makingnumber + 1
        }
    }
    console.log (square)
    let part1 = 0
    let part2 = 0
    for(let section = 0; section < dimensions; section++){
        part1 = part1 + Number(square[section][section])
    }
    for(let sectionother = 0; sectionother < dimensions; sectionother++){
        part2 = part2 + Number(square[sectionother][dimensions-1-sectionother])
    }
   
    console.log(total)
}
function destroy(max){
    for(let y = 1; y <= max; y++){
        console.log(`testing: ${y}`)
        factorize(y);
        console.log("--")
        console.log("--")
    
    }
}

//5
function squaresum(input){
    let s2 = 0
    let s1 = 0
    for(let a = 1; a <= input; a++){
        s2 = s2 + (a**2)
    }
    for(let b = 1; b <= input; b++){
        s1 = s1 + b
    }
    s1 = s1 ** 2
    console.log (s1-s2)
}
//6
function smallestdivisiblebyupto(maxim){
    let candidate = 1
    let test = 2
    while(test <= maxim){
        if ((candidate % test) == 0){
            test = test + 1
        }else{
            candidate = candidate+1
            test = 2
        }
    }
    console.log(candidate)
}

//7
function toMilitaryTime(){
    let time = prompt("insert the time to convert")
    let h1 = time.charAt(0)
    let h2 = time.charAt(1)
    let m1 = time.charAt(3)
    let m2 = time.charAt(4)
    let s1 = time.charAt(6)
    let s2 = time.charAt(7)
    let AP = time.charAt(8)
    h = h1+h2
    h = Number(h)
    if (AP == "P"){
        h = h + 12
    }
    if (h == 24){
        h = 0
    }
    time = h+":"+m1+m2+":"+s1+s2
    console.log(time)
}

//8
function birdsightings(){
    let currentbird = 0
    let bird1 = 0
    let bird2 = 0
    let bird3 = 0
    let bird4 = 0
    let bird5 = 0
    let birdnum = +prompt("how many birds did you see?")
    for(let bird = 1; bird <= birdnum; bird++){
        currentbird = +prompt("what bird did you see")
        if (currentbird == 1){
            bird1 = 1 + bird1
        }   else if (currentbird == 2){
            bird2 = 1 + bird2
        }   else if (currentbird == 3){
            bird3 = 1 + bird3
        }   else if (currentbird == 4){
            bird4 = 1 + bird4
        }   else if (currentbird == 5){
            bird5 = 1 + bird5
        }
    }
    if ((bird1 >= bird2) && (bird1 >= bird3) && (bird1 >= bird4) && (bird1 >= bird5)){
        console.log("bird1")
    }
    if ((bird3 >= bird2) && (bird3 >= bird1) && (bird3 >= bird4) && (bird3 >= bird5)){
        console.log("bird3")
    }
    if ((bird2 >= bird1) && (bird2 >= bird3) && (bird2 >= bird4) && (bird2 >= bird5)){
        console.log("bird2")
    }
    if ((bird4 >= bird2) && (bird4 >= bird3) && (bird4 >= bird1) && (bird4 >= bird5)){
        console.log("bird4")
    }
    if ((bird5 >= bird2) && (bird5 >= bird3) && (bird5 >= bird4) && (bird5 >= bird1)){
        console.log("bird5")
    }
}
