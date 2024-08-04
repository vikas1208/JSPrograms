// Inbuild function- call() function allow to call other object function 


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

youtuber1.feature.call(youtuber2,4,"subscribe");
