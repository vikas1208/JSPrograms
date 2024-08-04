// Inbuild function- bind() function - In this we can bind an object to a common function, so that the function gives different
// result when its needed

const youtuber1 = {
    name:"Vikas Kumar",
    department: "Engineering", 
}

const youtuber2 = {
    name: "Akash Kumar", 
    department : "Finance"
}

 function features(age){
    console.log(`my name is ${this.name}, my age is ${age} and my department is ${this.department}`);
}

let user = features.bind(youtuber2);
user(25);

