/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    //string to store reversed string
    let output = ""
    //reverses the string
    for(let i = someStr.length; i > -1; i--){
        output += someStr.charAt(i)
    }  
    //returns the reversed string
    return output
}