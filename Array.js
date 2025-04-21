const myArr = [1,2,3,4,5,6,7]
// console.log("A", myArr);
// console.log(myArr.slice(1,3));

// console.log("B", myArr);
// console.log(myArr.splice(1,3));

// console.log("C",myArr);

// So splice takes the required values out of the original and thus divides the original array, 
// while Slice doesn't make changes to the original array

// .Push works on the same array by reference while .Concat returns a new array
// .Push Pushes the entire array a new value while .Concat pushes each entity into the old array

for (const i=0; i<myArr.length; i++) {
    for (const j=i+1; j<myArr.length; j++) {

    }
}

// Spread operator to join arrays
const myArr1 = [1,2,3,4]
const myArr2 = [...myArr,5,6,7,8]
// console.log(myArr2);

const another_array = [1,2,3,[4,5],6,[7,[8,9]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);





