function hasTargetSum(array, target) {
  // Write your algorithm here
for(let j=0;j<array.length-1;j++){
  for(let i=j+1;i<array.length-j;i++){
    return array[j] + array[i] === target;
   }
}
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  -Take the given array and the target.
  -start from the first element in the array, add it to the each one of the subsequent elements.
  -Immediately you get a sum equal to the target provided, return true and stop the execution.

*/

/*
  Add written explanation of your solution here
  -We make a function to make the required comparison.
  -The function takes in the array in question and the target.
  -The function uses a for----loop to add the elements to each of the
   rest of the elements in the array.
   -Immediately the function finds the sum of any pair in the array equal to the target
    element, it returns true and the execution is halted.
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 1, 4, 13, 30], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([50, 3, 7, 6, 78], 10));
}

module.exports = hasTargetSum;
