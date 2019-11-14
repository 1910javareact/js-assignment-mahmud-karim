/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    //string to store reversed string
    let output = ""
    let pal = false
    //reverses the string
    for(let i = someStr.length; i > -1; i--){
        output += someStr.charAt(i)
    }
    //if the reverse is the same as the string make pal true
    if (output === someStr){
        pal = true
    }
    //returns outputgit 
    return pal
}
