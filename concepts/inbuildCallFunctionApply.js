// Inbuild function- apply() function allow to call other object function. The difference between call and apply is that in apply
// function we can pass arguments using array


const youtuber1 = {
    name:"Vikas Kumar",
    content: "Programming",
    feature: function(rating,support){
        console.log(`very friendy way of teaching. ${this.name} is my favourite ${this.content} channel. I will love to give ${rating} star.
         Please ${support} ${this.name} channel `);
    }
}

const youtuber2 = {
    name: "Akash Kumar",
    content : "DSA"
}

youtuber1.feature.apply(youtuber2,[4,"subscribe"]);

// Another use-case of apply function
let res = Math.max.apply(null,[1,2,3,4,5,6]);
console.log(res);
