/**
 * A self-dividing number is a number that is divisible by every digit it contains.
 * For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
 * 
 * Also, a self-dividing number is not allowed to contain the digit zero.
 * Given a lower and upper number bound, output a list of every possible self dividing number, 
 * including the bounds if possible.
 * 
 * Example 1:
 * Input: 
 * left = 1, right = 22
 * 
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 */



/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let res = [];
  for(let i = left; i <= right; i++){
      if(!(i+'').includes(0)){
          let tmp = i;
          while(tmp%10){
              if(i%(tmp%10)!== 0){
                  break;
              }else{
                  tmp = ~~(tmp/10);
              }
          }
          if(tmp===0){
              res.push(i);
          }
      }
  }
  return res;
};


/**
 * Runtime: 56 ms, faster than 88.87% of JavaScript online submissions for Self Dividing Numbers.
 * Memory Usage: 34.9 MB, less than 93.00% of JavaScript online submissions for Self Dividing Numbers.
 */
