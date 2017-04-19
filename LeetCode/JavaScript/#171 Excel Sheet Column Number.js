/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    s = s.toUpperCase()
    var len = s.length;
    var res = 0
    for(let i=0;i<len;i++){
      res =26*res+(s[i].charCodeAt()-64); 
    } 
    return res
};