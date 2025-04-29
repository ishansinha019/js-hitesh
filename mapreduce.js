// const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.map((num) => num+10)
// console.log(newNums);

// example of chaining .map.map or .map.filter etc
// difference between map and filter is that filter passes all the values which satisfy the condition while map performs the method on each element of the array and returns it.

// const newNums = myNums.map((num) => num*10).map((num) => num+1).map((num) => num+2)
// console.log(newNums);

// const myNums = [1,2,3]
// const myTotal = myNums.reduce((acc,currval) => {
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
    
// }, 0)

// console.log(myTotal);

// this reduce is generally used to calculate shopping cart total bills where an initial value like shipping cost is predetermined can be seen in below example.

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const myTotal = shoppingCart.reduce((acc,currval) => {
    return acc + currval.price
},0)

console.log(myTotal);




