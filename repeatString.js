// To repeat a string n times

let repeatString = (str,num)=>{
    if(num===1)
        return str;
    else 
        return str.concat(repeatString(str,num-1));
}

let res = repeatString("abc",10);
console.log(res);
