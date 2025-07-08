class User {
    constructor(username) {
    this.username = username
    } 

    logMe() {
        console.log(`Username is ${this.username}`);
    }

    static createID() {              // just like private property so the function can't be passed on for inheritance
        return `123`
    }
}

const hitesh = new User("Hitesh")
console.log(hitesh.createID());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const sgre = new Teacher("SGRE", "sgre@google.com")
console.log(sgre.createID())



