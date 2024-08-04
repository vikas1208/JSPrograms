// To check if the given string is a palindrome or not

function isPalindrome(str){
 
    let newstr=str.toLowerCase().replace(/\W/g,"");
   
    let i=0;
    let j=newstr.length-1;
    while(i<=j){
        if(newstr.at(i)!==newstr.at(j)){           
            return false;
        }
        i++;
        j--;
    }
    return true;

}



let res = isPalindrome("A man, a plan, a canal, Panama");
console.log(res);
// 