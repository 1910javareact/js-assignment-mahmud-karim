/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    //creates new array and copy over everything
    let newArr = [...someArr]
    //copies next element to ith spot
    for (let i = index; i < newArr.length; i++) {
        newArr[i] = newArr[i+1]
    }
    //removes last element
    newArr.pop()
    //returns new array
    return newArr
}
