/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    //Varibles declared
    let a = 0, b = 1, temp;
    //Goes through the numbers adding numbers up
    for (let i = n; i > 0; i--) {
        temp = a
        a = a + b
        b = temp
    }
    return a
}