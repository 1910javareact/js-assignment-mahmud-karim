/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    //goes through the keys
    for(let key of someObj){
        //prints out both the keys and values
        console.log(`key = ${key}, value = ${someObj[key]}`);
    }
}