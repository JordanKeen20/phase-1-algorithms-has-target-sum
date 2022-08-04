function hasTargetSum(array, target) {
  // The algorithm:
  for(let i = 0; i < array.length; i++){
    const endArray =target - array[i];
    for(let j = i + 1; j < array.length; j++){
    if(array[j] === endArray)      
    return true
    }
  }
  return false
}
hasTargetSum([2, 3, 6, 7, 8], 10)

/* 
  The Big O time complexity of the function:
  function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    > n steps(depending on the length of array)
    const endArray =target - array[i];
    for(let j = i + 1; j < array.length; j++){
     > nested loop witch means n*n 
    if(array[j] === endArray)      
    return true
    }
  }
  first step
  return false
}
*/

/* 
 pseudocode here:

 Make a function that recives two arguments,
 one Array of integers and one target integer.
 This function should take each number in the 
 Array and add them together. If any numbers added
 together make the target integer it returns true, if not 
 it returns false.

 create a function with two arguments 1 Array of integers and 1 target integer.
  add each number together until it reaches the target integer.
    If it reaches the target integer, return true.
      If not return false.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
