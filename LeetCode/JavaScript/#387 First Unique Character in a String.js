/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var res = {};
    var len = s.length;

    for(let i=0;i<len;i++){
      if(!res[s[i]]){
        res[s[i]]=1;
      }else{
        res[s[i]]++;
      }
    }
    for(var key in res){
      if(res[key]==1){
        return s.indexOf(key);
      }
    }
    return -1;
};