// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.


var plusOne = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        nums[i]++
            if (nums[i] > 9) {
                nums[i] = 0
            }
        else {
            return nums
        }
    }
    nums.unshift(1)
    return nums
}
