// Program to create hash tag. First letter should always be capital

//First Solution
function generateHashTagSol1(str){
    let strArr = str.split(" ");
    let res="#";
    for(let word of strArr){
       let  ch = word.at(0);
       let  charVal = word.charCodeAt(ch);
            if(charVal>=97){
                ch = String.fromCharCode(charVal-32);
            }
           res= res.concat(ch.concat(word.substr(1)));
    }
    return res;
}

//Second Solution
function generateHashTagSol2(str){
    let strArr = str.split(" ");
    strArr=strArr.map((currEle) => currEle.at(0).toUpperCase()+currEle.substr(1));
    strArr=`#${strArr.join("")}`;
    return strArr;
}

//Third Solution
function generateHashTagSol3(str){
    let strArr = str.split(" ");
    let res="#"
    strArr=strArr.map((currEle) => currEle.replace(currEle.at(0),currEle.at(0).toUpperCase()));
    strArr=`#${strArr.join("")}`;
    return strArr;
}

const res1 = generateHashTagSol1("my name is Vikas Kumar");
console.log(res1);

const res2 = generateHashTagSol2("my name is Akash Kumar");
console.log(res2);

const res3 = generateHashTagSol3("my name is Rakesh Ranjan");
console.log(res3);



