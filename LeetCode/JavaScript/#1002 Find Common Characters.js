
/**
 *  Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  
 * For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
 * You may return the answer in any order.
 * 
 * 
 * Example 1:
  Input: ["bella","label","roller"]
  Output: ["e","l","l"]
 *
  Example 2:
  Input: ["cool","lock","cook"]
  Output: ["c","o"]
 */


var commonChars = function(A) {
  if(A.length===1){
    return A[0].split('');
  }
  let lens = A.length;
  let res = [];
  for(let j of A[0]){
    let i;
    for(i = 1; i < lens; i++){
      if(!A[i].includes(j)){
        break;
      }else{
        A[i] = A[i].replace(j,'');
      }
    }
    if(i === lens){
      res.push(j);
    }
  }
  return res;
};

/**
 * Runtime: 68 ms, faster than 79.75% of JavaScript online submissions for Find Common Characters.
 * Memory Usage: 38 MB, less than 54.02% of JavaScript online submissions for Find Common Characters.
 */
