/**
 * S and T are strings composed of lowercase letters. In S, no letter occurs more than once.
S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. 
More specifically, if x occurs before y in S, then x should occur before y in the returned string.
Return any permutation of T (as a string) that satisfies this property.

Example :
Input: 
S = "cba"
T = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
*/


var customSortString = function(S, T) {
    let res = '';
    for(let i = 0; i < S.length; i++){
      while(T.indexOf(S[i])!== -1){
        res += S[i];
        let pos = T.indexOf(S[i]);
        T = T.slice(0,pos) + T.slice(pos+1);
      }
    }
    return res+T;
};

/**
 * Runtime: 72 ms, faster than 11.59% of JavaScript online submissions for Custom Sort String.
Memory Usage: 34.3 MB, less than 75.00% of JavaScript online submissions for Custom Sort String.
 */
