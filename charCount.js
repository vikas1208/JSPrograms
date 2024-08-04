// Program to find the number of character in a word (ignore the case-sensitive)

//First Solution
function countCharSol1(str,ch){
    let strArr= str.split("");
    let actVal=ch.charCodeAt(ch);
    let res=0;
    for(let c of strArr){
        let expVal=c.charCodeAt(c);
             if(expVal===actVal || expVal-32 === actVal || expVal+32 === actVal ){
                 res+=1;
             }
       
    }
     return res;
 }

 //Second Solution
 function countCharSol2(str,ch){
    let totalCount=0;
    str = str.toLowerCase();
    ch  = ch.toLowerCase(); 
    let chArr = str.split("");
    totalCount=chArr.reduce((accum,currEle)=>{
        if(currEle===ch){
            accum++;
        }
        return accum;
    },0);

    return totalCount;
 }
 
 const res1 = countCharSol1("MissIssIppi","s");
 console.log('res1',res1);

 const res2 = countCharSol2("MissIssIppi","s");
 console.log('res2',res2);
 