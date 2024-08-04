// To identify the type of triangle

function checkTriangleType(a,b,c){
    if(a===b && b===c && a ===c)
        return "equilateral";
    else if(a===b || b===c || a===c)
        return"isosceles";
    else
        return"scalene";
    
}



let res1 = checkTriangleType(4,2,4);
console.log(res1);