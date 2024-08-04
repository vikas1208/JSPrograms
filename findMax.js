// To find the maximum number from the array

function findMax(arr){
    let res= arr.reduce((accum,currEle)=>{
        if(currEle>accum){
            accum=currEle;
        };
        return accum;
    },0);
    return res;
}




let res = findMax([-4,-2,0,1,-6]);
console.log(res);