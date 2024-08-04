// Higher Order functions are functions that take other function as argument or return functions as their results.

const interviewQuestion = (name)=>{
    if(name==="Vikas"){
        return function (topic){
            console.log(`Hello ${name}`);
        }
    }if(name === "Akash"){
        return function (topic){
            console.log(`Hi ${name}`);
        }
    }
}

interviewQuestion("Akash")("Javascript");
