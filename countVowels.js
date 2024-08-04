// To count the number of vowel 

let countVowels = (str)=>{
    str=str.replace(/\W/g,"").toLowerCase();
    str=str.split("");
    let total=str.reduce((accum,currELe)=>{
        
        if(currELe==='a' || currELe==='e' || currELe==='i'|| currELe==='o' || currELe==='u' ){
            accum+=1;
        }
        return accum;
    },0);
    return total;
}


let res = countVowels("The quick brown Fox");
console.log(res);