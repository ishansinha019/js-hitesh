// Immediately Invoked Fuction Expression (IIFE) : used specially for files contining DB connection
(function db_com() {
    console.log(`DB CONNECTED`);
})(); //this is a named IIFE

((err) => {
    console.log(`Error encountered type ${err}`);
})("402");

