


let submit = document.querySelector('#submit');
let output = document.querySelector('#output');
let reset = document.querySelector('#reset');


function spinWords() {
  let str = document.querySelector('#str').value;
// turn "str" into an array of strings with each word of the string becoming an element in the array
  str = str.split(" ");
  let newStr = [];
// iterate over the array. check each element to see if the length of the string in that element is less then 5 characters
  str.forEach(x => {
    if(x.length < 5) {
// if true, push that element into a new array      
      newStr.push(x);
    } else {
// if false, create a new array from the characters in element x (using the spread operator), reverse that new array, join it back into a string, and then push it into the array called newStr      
      newStr.push([...x].reverse().join(""));  
    }
  });
// return newStr as a string of all it's element joined together with spaces.
  output.innerHTML =  newStr.join(" ");
}

// clear form and output by setting to empty strings
function clear() {
  output.innerHTML = "";
  document.querySelector('#str').value = "";
}

submit.addEventListener('click', spinWords);
reset.addEventListener('click', clear);