let myName = 'hitesh     '
let myChannel = 'chai    '

console.log(myName.trueLength);     // here we are trying to call a property not a method or function

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function(){                                       //accessed the top hierarchy and gave it this property so all the objects below can access it
    console.log(`hitesh is present in all objects`);
    
}

// heroPower.hitesh();
// myHeros.hitesh();

// if we give the property to a below hierarchy like to an array, it doesn't go above.

// inheritance

const User = {
    name:"chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto___: TeachingSupport
} 

Teacher.__proto___ = User

// modernSyntax

Object.setPrototypeOf(TeachingSupport, Teacher) // so TeachingSupport has access to all properties of Teacher

let anotherUserName = "ChaiAurCode       "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();




