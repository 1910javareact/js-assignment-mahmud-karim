/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    //declare varibles
    let len = someStr.length
    let output = ""
    //Index was not a number
    if (isNaN(startIndex) || isNaN(endIndex)){
        throw "input was incorrect";
    }
    //gets the substring
    for(let i = startIndex; i < endIndex; i++){
        output += someStr.charAt(i)
    }
    //outputs new variable with wanted substring
    return output

}
