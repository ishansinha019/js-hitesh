const mySym = Symbol("key1");

 const JsUser = {            //non singleton object declaration
    name: "Ishan",
    [mySym] : "Sym",
    age: 18,
    email: `abc@gmail.com`,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySym]);
// to print a symbol
// Object.freeze(JsUser); //used to freeze the Object key's and thus they can not be changed
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User!");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function() {
    console.log(`Hello Js user, ${this.name}`);
}
// console.log(JsUser.greeting2());

const appUser = new Object()        // singleton object declaration

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ishan",
            lastname: "Sinha"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

console.log(Object.keys(regularUser)); //returns an array of keys

// object destructure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course;
console.log(instructor);















