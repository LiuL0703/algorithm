/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s===t) return true;
    var lens= s.length;
    var lent = t.length;
    var i=1;
    if(lens!==lent) return false;
    while(i<lens){
       if(s.indexOf(s[i])===t.indexOf(t[i])){
          i++;
       }else{
          break;
       }
    }
    return i === lens;
};

// 
var isIsomorphic = function(s, t) {
    if(s===t) return true;
    var lens = s.length;
    if(lens!==t.length) return false;
    var hash = {};
    var map = {};

    for(var i = 0;i<lens;i++){
      if(!hash[s[i]]&&!map[t[i]]){
         hash[s[i]] = t[i];
         map[t[i]] = true;
      }else{
        if(hash[s[i]]!==t[i]){
          return false;
        }
      }
    }
    return true;
};