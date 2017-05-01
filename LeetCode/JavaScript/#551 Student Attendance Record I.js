/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return !(/A.*A|LLL/.test(s));
};



var checkRecord = function(s) {
    var res = {"L":0,"A":0};
    var len = s.length;
    for(let i in s){
      if(s[i]==="L"){
        res["L"] +=1;
        if(res["L"]>=3){
          return false;
        }
      }else if(s[i]==="A"){
        res["L"] = 0;
        res["A"] +=1;
        if(res["A"]>=2){
          return false;
        }
      }else{
        res["L"] = 0;
      }
    }
    return true; 
};