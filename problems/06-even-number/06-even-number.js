/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    //divides it in half and gets the floor
    let even = Math.floor(someNum/2)
    //even numbers will have the same floor as regular division
    if (even === someNum/2){
        return true
    }
    return false
}


