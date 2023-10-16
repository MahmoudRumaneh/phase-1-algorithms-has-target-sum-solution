function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}
/*
Pseudocode:

Create a function called hasTargetSum that takes an array and a target as parameters.
Use a nested loop to iterate through all pairs of numbers in the array.
The outer loop iterates from the first element to the second-to-last element.
The inner loop iterates from the next element to the last element, avoiding duplicate pairs.
Check if the sum of the current pair of numbers equals the target.
If a pair is found with a sum equal to the target, return true.
If no such pair is found after iterating through the entire array, return false.

*/

/*
Solution Explanation:

The `hasTargetSum` function checks if there exists a pair of numbers in the array that adds up to the target.
 It returns `true` if such a pair is found; otherwise, it returns `false`.
 This approach provides a basic solution before optimizing for efficiency.
*/
if (require.main === module) {
  // Test cases
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
