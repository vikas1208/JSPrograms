// Callback function- used to pass function as a argument

function sayHello(){
    console.log("Helloooo");
}

function sayHi(){
    console.log("Hiiiiiii");
}

function add(a,b,callback){
    let sum=a+b;
    callback();
    return sum;
}

let res= add(10,20,sayHello);
console.log(res);