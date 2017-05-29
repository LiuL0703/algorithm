/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var all = {"(":")","{":"}","[":"]"};
    var res = [];
    var len = s.length;
    for(let i =0;i<len;i++){
      if(s[i] in all){
        res.push(all[s[i]]);
      }else{
        if(s[i]!==res.pop()){
          return false;
        }
      }
    }
    return res.length === 0;
};