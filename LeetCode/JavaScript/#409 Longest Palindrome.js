/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var res = {}
    var len = s.length;
    var ans = 0;
    for(var i in s){
      if(res[s[i]]){
        res[s[i]] +=1;
      }else{
        res[s[i]] = 1;
      }
    }
    for(var key in res){
      if(res[key]%2===0){
        ans +=res[key];
      }else{
        ans +=res[key]-1;
      }
    }
    if(len!==ans){
      ans +=1;
    }
    return ans;

};
