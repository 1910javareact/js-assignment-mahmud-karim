/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  //switches bases one the shape input
  switch (shape) {
    case "Square":
      //prints the lines aka height
      for(let i = 0; i < height; i++){
        let temp = ""
        //adds the same number of characters as the height to the temp string
        for(let j = 0;j < height; j++){
          temp += character
        }
        console.log(temp);
      }
      break;
    case "Triangle":
      //prints the lines aka height
      for(let i = 0; i < height; i++){
        let temp = ""
        //adds one more each line
        for(let j = i;j > -1; j--){
          temp += character
        }
        console.log(temp);
      }
      break;
    case "Diamond":
      //star variable keeps track of the number of stars
      let star = 0
      //half variable for printing out the first half
      let half = Math.floor(height/2) +1
      //sechalf varialbe for printing out the second hald
      let secHalf = Math.floor(height/2)
      //spaces varible for keeping track of the spaces
      let spaces = Math.floor(height/2)
      //prints the first half of the diamond
      for(let i = 0; i < half; i++){
        let temp = ""
        //adds space
        for(let j = 0;j < spaces; j++){
          temp += " "
        }
        //prints out the character accoring to the star variable
        for(let j = 0;j <= star; j++){
          temp += character
        }
        //decrments the spaces variable and increments the star variable
        spaces--
        star += 2
        console.log(temp);
      }
      //resests the spaces and star
      
      spaces = 0
      star -=3
      //prints out the second half of the diamond
      for(let i = half; i > 0; i--){
        let temp = " "
        //prints the spaces
        for(let j = 0;j < spaces; j++){
          temp += " "
        }
        //prints the stars
        for(let j = 0;j < star; j++){
          temp += character
        }
        //increments the spaces and decrements the star
        spaces++
        star -= 2
        console.log(temp);
      }
      break;
  }
}