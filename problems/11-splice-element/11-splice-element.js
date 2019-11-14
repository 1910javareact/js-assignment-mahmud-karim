/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    //creates new array and copy over everything
    let newArr = [...someArr]
    //temporary variable to store old value
    let temp = newArr[index+1]
    //adds the new element
    newArr[index+1] = 'new element added'
    //creates new index
    let newIndex = index +2
    //copies over the rest of array
    for (let i = newIndex; i < someArr.length; i++) {
        newArr[i] = temp
        temp = newArr[i+1]
    }
    //returns new array
    return newArr
}

let arr = [5,67,4,3,8]

console.log(spliceElement(arr, 1));
