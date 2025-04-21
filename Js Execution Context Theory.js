// Javascript Execution Context:
//     - Global execution Context
//     - Function Execution Context
//     - Eval Execution Context (used in Mongoose)


// Phases -> example code :

// //

// let val1 = 10
// let val2 = 5
// function addNum(num1,num2) {
//     let total = num1+num2
//     return total
// }
// let result1 = addNum(val1,val2)
// let result2 = addNum(10,2)


// //

// 1. Global execution phase -> Stored in "this"
// 2. Memory phase -> eg Val1 -> Undefined, Val2 -> Undefined, addNum -> func definition, result1 -> undefined, result2 -> undefined, result1 -> undefined, result2 -> undefined
// 3. Execution phase -> val1 -> 10, val2 -> 5


// change is made 
// another change is made 
