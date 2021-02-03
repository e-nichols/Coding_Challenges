/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++){
    for(let ii = i+1; ii < nums.length; ii++){
      if(nums[i] + nums[ii] === target){
        return [i, ii]
      }
    }
  }
  throw new Error('No valid solution')
}

console.log(twoSum([2,7,11,15], 9))

console.log(twoSum([1,23,11,5], 6))
