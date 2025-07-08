const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);            // So we can see that Pi is non writeable, non ennumerable etc. since it is hardcoded to be false and hence can't be changed from constant 3.14

// if we want to chage the properties of an object that we defined
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    problem: function() {
        console.log("error encountered");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))
Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true        // this decide if "chai" will be iteratable or not if taken in a loop
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }   
}


