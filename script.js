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

// Сейчас на Литкоде функция проходит 1 и 3 тесты, но не проходит 2.

const containsDuplicate = (nums) => {
    if (nums.length !== nums.filter((num, idx) => {
        return idx !== nums.indexOf(num)
    }).length) {
        return true
    } else {
        false
    }
}
containsDuplicate([1, 2, 3, 4])