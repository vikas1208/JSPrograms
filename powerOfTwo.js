// To verify if the given number is power of 2

let powerOfTwo = (num)=>{
    let flag=false;
        for(let i=0;i<(num/2);i++){
            if(2**i===num){
                flag=true;
            }
        }
    return flag;
}

let res = powerOfTwo(1028);
console.log(res);