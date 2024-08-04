let outerfunc = (a)=>{
    var b=10;
    let innerfunc = () => {
            let sum = a+b;
            console.log(sum);
    }
    return innerfunc;
}

let res= outerfunc(5);
console.log(res);

