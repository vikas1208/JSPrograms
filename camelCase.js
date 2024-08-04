// To convert the given string into camel case

let toCamelCase = (str) => {
    str=str.toLowerCase().split(" ");
    let result=str[0];
    
    for(let i=1;i<str.length;i++){
        let subStr = str[i].split("");
        let ch=str[i].charCodeAt(subStr[0]);
        subStr[0] =subStr[0].replace(subStr[0],String.fromCharCode(ch-32));
        let word= subStr.join("");    
        result=result.concat(word);
    }
return result;
} 

let res = toCamelCase("Welcome to javascript language");
console.log(res);