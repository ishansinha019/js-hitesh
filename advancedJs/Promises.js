// Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// basically, whatever task we assigned to the compiler, wont be completed at the moment but it is a promise that it will be done later with poitive or negative results.
// a Promise uses 3 states: .Pending-initial state, neither fulfilled nor rejected    .fulfilled-meaning that the operation was completed successfully    .rejected-meaning that the operation failed

const promiseOne = new Promise(function(resolve,reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is done');
        resolve()
    },1000)
})

promiseOne.then(() => {
    console.log("Promise is consumed");
})
// console.log('Check')

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(() => {
    console.log("Second promise is consumed");
})

const thirdPromise = new Promise ((resolve,reject) => {
    setTimeout(() => {
    resolve({username: "G2", email: "ishan@ishansinha.com"})
    },1000)
})

thirdPromise.then((user) => {
    console.log(user);
    
})

const fourthPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "D3", email: "abc@yas.com"})
        } else {
            reject('ERROR: Something went wrong')
        }
        
    },1000)
})

fourthPromise.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
    
})

const fifthPromise = new Promise ((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "G2D3/D67", password: "12345"})
        } else {
            reject('ERROR: G2D3/D67 data not found!')
        }
    },1000)
});

async function consumeFifthPromise(){

    try {
        const response = await fifthPromise //since promise is an object so we don't write it as fithPromise()
        console.log(response);  
    } catch (error) {
        console.log(error);
        
    }
}

consumeFifthPromise()

const urlAPI = 'https://api.github.com/users/hiteshchoudhary'
const sixthPromise = new Promise( (resolve,reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve(JSON.parse(urlAPI))
        } else {
            reject("ERROR: Couldn't retirive the data")
        }
    },1000)
}) 