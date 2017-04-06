/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    t = t.split("");
    s = s.split("");
    var pos;
    var len = t.length;
    for(i=0;i<len;i++){
    	pos = t.indexOf(s[i]);
    	pos!==-1? t.splice(pos,1):"";
    }
    return t;
};