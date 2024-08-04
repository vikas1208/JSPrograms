// To find the sum of digits

    function sumOfDigits(n){
        let total=0;
        n=String(n);
        n=n.split("");
        total=n.reduce((accum,currEle)=>{
           accum = accum+Number(currEle);
            return accum;
        },0)
        return total;
    }



let res = sumOfDigits(124546546);
console.log(res);