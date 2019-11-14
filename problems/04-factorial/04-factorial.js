/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    //checks for 0s
    if (sumNum === 0){
        return 1
    }
    //checks for 1s
    if (sumNum === 1) {
        return 1
    }
    //multiplies the num with it's prvious vaule
    let value = sumNum * factorial(sumNum - 1)
    //returns output with new value
    return value
}
