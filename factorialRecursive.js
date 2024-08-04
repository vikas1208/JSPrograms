// To find the factorial of a number using recursion

let factorial = (num) => {
    if(num===1)
        return 1;
    else 
        return num * factorial(num-1);
}

let res = factorial(20);
console.log(res);