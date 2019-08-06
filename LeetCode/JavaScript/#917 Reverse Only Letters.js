/** 
 * 
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Note:

  S.length <= 100
  33 <= S[i].ASCIIcode <= 122 
  S doesn't contain \ or "
*/

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  if(!S) return S;
  let resLeft = '';
  let resRight = '';
  let lens = S.length;
  let endPos = lens - 1;
  for(let i = 0; i < lens; i++){
    if(endPos < i) break;
    if(/[A-Za-z]/.test(S[i])){
      while(endPos>=0){
        if(/[A-Za-z]/.test(S[endPos])){
          resLeft = resLeft + S[endPos];
          i !== endPos? resRight = S[i]+resRight:null;
          endPos--;
          break;
        }else{
          resRight = S[endPos] + resRight;
          endPos--;
        }
      }
    }else{
      resLeft = resLeft + S[i];
    }
  }
  return resLeft + resRight;
};

/**
 * Runtime: 56 ms, faster than 66.90% of JavaScript online submissions for Reverse Only Letters.
Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Reverse Only Letters.
 */
