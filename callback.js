<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<script src="boddy.js">let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];

// TODO: implement this function to return a string containing all words in a paragraph.
function createParagraph(words) {

let level = console.log(words);
return level;
}


// Prints paragraph to console
words.forEach(createParagraph);

// don't change this line
if (typeof module !== 'undefined') {
module.exports = createParagraph;
}</script>  -->
<script src="callback.js">// This is the array that contains numbers for you to work with
var myArray = [1, 2, 5, 6, 12, 23, 15, 31];

 // This array should only contain even numbers
 var evenArray = [];

 // This code will call your function when the page loads up
 // Don't edit this function!
 window.onload = () => {
 console.log(filterArray(myArray, isEvenCallBack));
 };

  function filterArray(myArray, isEvenCallBack) {
 // TODO: use filterArray to determine if a number is even or odd.
 //If the number is even, add it to the array 'evenArray'

 if(myArray % 2 == 0){
    evenArray = myArray;
   }
 else{  
    return false;
 }
 return evenArray;
 }

 // This function should return 'true' if a number is even and 'false' if a number is
//odd
 function isEvenCallBack(number) {
 // TODO: use the mod operator (%) to determine if number is even or odd
   
    if(number % 2 == 0)
    return true
 else
    var odd1 = number;
    return odd1;
    }

 // Do not edit code past this point
 if (typeof module !== 'undefined') {
 module.exports = { filterArray, isEvenCallBack };
 }</script>
<script>
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const words = [['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
                ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']]

const result = words.filter(word => words.length > 15);

console.log(result);
</script>
</body>
</html>
