/* 
  Array: Second-Largest

  Return the second-largest element of an array, or null if there is none.

  Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
/*

function secondLargest(nums) {
  if (nums.length < 3) 
  return null; 

let largest = Infinity;
let secLargest = Infinity;

  for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secLargest = largest;
            largest = nums[i];{
                else if (nums[i] > secLargest && nums[i] < largest) {
                    secLargest = nums[i]
                }
            }

        }
        return secondLargest
  } 
}
*/
function secondLargest(nums) {
    if (nums.length < 3) return null;                       // edge case: if the array is 2 or less then it will return null
    
    let largest = null;                                     // 
    let secondLargest = null;
    
    for (let num of nums) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }
    
    return secondLargest === null ? null : secondLargest;   // if the first condition is false, then it will find the second largest number and return it.
  }

// Tests
const result1 = secondLargest(nums1);
console.log(result1, 'should equal', expected1);

const result2 = secondLargest(nums2);
console.log(result2, 'should equal', expected2);

const result3 = secondLargest(nums3);
console.log(result3, 'should equal', expected3);

const result4 = secondLargest(nums4);
console.log(result4, 'should equal', expected4);

const result5 = secondLargest(nums5);
console.log(result5, 'should equal', expected5);

const result6 = secondLargest(nums6);
console.log(result6, 'should equal', expected6);

const result7 = secondLargest(nums7);
console.log(result7, 'should equal', expected7);

const result8 = secondLargest(nums8);
console.log(result8, 'should equal', expected8);