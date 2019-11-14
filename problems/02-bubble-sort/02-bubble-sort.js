/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    //Creates new array and copies over all values
    let newArray = [...numArray]
    //iterates through array
    for (let i = 0; i < newArray.length; i++) {
        //iterates through array actually switching the values
        for (let j = 0; j < newArray.length; j++) {
            //if left is bigger switch
            if (newArray[j] > newArray[j+1]){
                let temp = newArray[j]
                newArray[j] = newArray[j+1]
                newArray[j+1] = temp
            }
        }
    }
    return newArray
}
