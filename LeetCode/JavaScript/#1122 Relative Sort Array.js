/**
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
 * Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  
 * Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
 */

 /**
  Example 1:
    Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
    Output: [2,2,2,1,4,3,3,9,6,7,19]
  */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let res = arr2;
  let rest = [];
  let hash = new Map();
  let lens = arr1.length;
  for(let i = 0; i < lens; i++){
      let pos = res.indexOf(arr1[i]);
      if(!hash.has(arr1[i])){
        if(pos !== -1){
          hash.set(arr1[i],true);
        }else{
          rest.push(arr1[i]);
        }
      }else{
        res.splice(pos,0,arr1[i]);
      }
  }
  return res.concat(rest.sort((a,b)=> a - b));
};


/**
 * Runtime: 56 ms, faster than 81.15% of JavaScript online submissions for Relative Sort Array.
 * Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Relative Sort Array.
 */
