class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)                                      // whenever we use extends keyword for inheritance, we can use super keyword to retreive the parent class objects without using the call or this keywords
        this.email = email
        this.password = password

    }

    addCourse() {
       console.log(`New course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "1234")

chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof User)
