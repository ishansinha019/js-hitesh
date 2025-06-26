function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increament = function () {
    this.score++
}
createUser.prototype.printScore = function() {
    console.log(`the price is ${this.score}`);    // this ka matlab "jis", matlab jisne bhi bulaya udhar jayega
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printScore()
chai.increament()
chai.printScore()
