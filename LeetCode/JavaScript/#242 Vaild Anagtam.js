/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*var isAnagram = function(s, t) {
    var len1 = s.length;
    var len2 = t.length;
    var pos;
    t = t.split('');
    if(len1!==len2) return false;
    if(s===t) return true;
    for(let i = 0;i<len1;i++){
      pos = t.indexOf(s[i]);
      if(pos===-1) return false;
      else{
        t.splice(pos,1);
      }
    }
    return true;
};
isAnagram("hehllo",'ollhee');
*/
var isAnagram = function(s, t) {
    return s.split("").sort().toString() === t.split("").sort().toString();
};
isAnagram("hehllo",'ollhee');
