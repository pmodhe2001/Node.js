function add(a,b){
    return a+b;
}

console.log(add(2,8));
// process looks over whole environment of the file
console.log("Process.argv -> ",process.argv); // process is a global object it checks whatever is running here
// above functions returns list of program files running to execute this program index.js
// everything going on is looked upon by process object
// It also gives arguments inside list of return data 
// list elements inside returned list is string
var args=process.argv.slice(2);

// using parseInt function we convert string to int
console.log("Adding the numbers : ",add(parseInt(args[0]),parseInt(args[1])))