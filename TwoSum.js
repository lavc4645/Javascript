/** Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */
const checkSum = () => {
  const r1 = require("readline-sync");
  let nums = [];
  let i = Number(r1.question("Enter the size of array "));
  for (let index = 0; index < i; index++) {
    nums.push(Number(r1.prompt()));
    console.log(nums);
  }
  let target = Number(r1.question("Enter the target value "));
  let NumIndex = [2];
  for (let index = 0; index + 1 < nums.length; index++) {
    let sum = nums[index] + nums[index + 1];
    NumIndex[0] = index;
    NumIndex[1] = index + 1;
    console.log("Sum", sum);
    if (sum == target) {
      console.log("Num Index", NumIndex);
      return NumIndex;
    }
  }
  console.log("No solution");
};
const answer = checkSum();
console.log(answer);
