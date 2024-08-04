// To sort the array in ascending order

function sortAscendingOrderSol1(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var temp= arr[i];
                arr[i]= arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

function sortAscendingOrderSol2(arr){
    return arr.sort((a,b)=> a-b)
}


let res1 = sortAscendingOrderSol1([3,10,-5,4]);
console.log(res1);

let res2 = sortAscendingOrderSol2([3,10,5,4,0,-2]);
console.log(res2);