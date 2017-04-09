/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ");
    var len = s.length;
    var i=0;
    for(i=0;i<len;i++){
    	s[i] = s[i].split("").reverse().join("");
    }
    return s.join(" ");
};