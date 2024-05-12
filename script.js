// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// const containsDuplicate = (nums) => {
//     const newNums = {}  
//     nums.forEach(num => {
//         if (newNums[num] === undefined) {
//             return newNums[num] = 1
//         } else { return newNums[num]++ }
//     });
// if(nums.length !== Object.keys(newNums).length) {
//     return true;
// } else {
//     return false;
// }
// }
// containsDuplicate([1, 2, 3, 4])


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up
// to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Output: [0,1]

// const twoSum = (nums, target) => {
//     const myMap = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         let secondVar = target - nums[i]

//         if (myMap.get(secondVar) === undefined) {
//             myMap.set(nums[i], i)
//         } else {
//             return [myMap.get(secondVar), i]
//         }
//     }
// };
// console.log(twoSum([3,3], 6));


// Begin by initializing a stack.
// Iterate, through the given string.
// If an open parenthesis is encountered, push it onto the stack.
// If a closing parenthesis is encountered check if it matches the element of the stack.
// If they match, pop the element from the stack; otherwise conclude that the parentheses are not balanced 
// and return false.
// After iterating through all characters in the string if the stack is empty it means all parentheses have 
// been correctly closed so return true.


const isValid = (s) => {
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    const stack = [];

    for (el of s) {
        if (pairs[el] !== undefined) {
            stack.push(el)
        } else if (el === ")" ||
            el === "}" ||
            el === "]") {
            if (pairs[stack.pop()] !== el) {
                return false;
            }
        }
    }
    return stack.length === 0
};
isValid('()[]{}')