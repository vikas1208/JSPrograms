// Write a program to find the nth fibonacci element
// 0 1 1 2 3 5

let calculatefibonacci = (num) => {
    if(num===0) 
        return 0; 
    else if(num === 1 || num === 2)  
        return 1;
    else 
        return calculatefibonacci(num-1)+ calculatefibonacci(num-2);
}


let res = calculatefibonacci(8);
console.log(res);
