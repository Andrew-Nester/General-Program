// for (let e = 1; e<21; e++){
//     if (e%2==0){
//         console.log(e)
//     }
// }


// //2

// let i = 0
// while(i < 3){
//     alert( `number${i}!`)
//     i = i + 1
// }

//3
// let p = 0
// while (p<100){
//     p = Number(prompt("Give a number larger than 100"))
//     console.log (p)
//     if (p==0){
//         break
//     }
// }

//4
// let a = 0
// let processed = 0
// let total = 0
// let sum = []
// while (true){
//     a = prompt("give a number to add")
//     sum[sum.length] = Number(a)
//     if (!a && a != "0"){
//         console.log (sum)
//         for (let x = 0; x < sum.length; x++){
//             processed  = processed + sum[x]
//         }
//         alert(processed)
//         break
//     } 
// }


//5
let styles = ["Jazz", "Blues"];
styles.append("Rock n' Roll");
 let x = styles.length/2;
 if (x % 2 == 1);{
    x = x - 0.5;
 }
styles[x]= "Classics"
styles.shift()
styles[styles.length]= "Rap";
styles[styles.length]= "Reggae";
