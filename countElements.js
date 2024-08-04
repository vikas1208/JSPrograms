// To count the number of times elements occurs and find mode 

let countElements = (arr)=>{
    let numbers = new Map();
    for(let element of arr){
        if(!numbers.has(element)){
            numbers.set(element,1);
        }else{
            numbers.set(element,numbers.get(element)+1);
        }
    }

    let mode = 0;
    let actVal=0;
    for(let ele of numbers.keys()){
        let tempVal=numbers.get(ele);
        if(tempVal>actVal){
            actVal=tempVal;
            mode = ele ;
        }
    }

    return [numbers,mode];
}

let [resMap,modeEle] = countElements([1,2,2,3,4,2,4,4,4,4,3,1,1,1,1,1,1,1]);
console.log(resMap);
console.log(modeEle);