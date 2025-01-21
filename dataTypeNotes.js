/*

//These are notes on data types

// there are 8 data types in Javascript

// 1.  Numbers both integers and floats
        - in addition to traditional numbers this data type inculdes infinity and NAN (Not a Number)
2.  BigInt data type (allows ridiculously large numbers) (2^53-1)
        to use add a lower n to the end of the number (ex. 475847598347587485743857384578n)
3.  String  these are letters, words, characters, numbers and symbols (treated like text)

*/
console.log (2+3)
console.log ("2"+"3")
/*
addition using string uses concatination
strings are formed by putting symbols in quotation marks

In Java there are 3 kinds of quotes
        The double quoation mark "Hello"
        The Single quotationmark 'Hello'
        THe backticks `hello`
*/

console.log ("Hello World")
console.log ('Hello World')

//If a string contains an apostrophe use double quotes, if quotation use single quotes
//Backticks allow you to embed variables within a string

let myName = "steve"
console.log ("myName")
console.log (`Hello, ${myName}`)
console.log (` 2+3 ${2+3}`)

//Many programming launguages have a `char` data type reperesenting a single character
// Javascript doesn't

