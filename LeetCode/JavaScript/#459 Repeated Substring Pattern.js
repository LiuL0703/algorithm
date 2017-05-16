/**
 * @param {string} s
 * @return {boolean}
 */
/*var repeatedSubstringPattern = function(s) {
    var pos = s.slice(1).indexOf(s[0]);
    if(pos===-1) return false;
    var val = s.slice(0,pos+1);
    var re = new RegExp(val);
    while(re.test(s)){
      s = s.slice(pos+1);
    }
    return !s;
};*/
var repeatedSubstringPattern = function(s) {
  if(s.length===1) return false;
  var flag = Math.ceil(s.length/2);
  var temp = s;
  var count = 0;
    while(flag){
      count++;
      flag--;
      var re = new RegExp(s.slice(0,count));
      while(re.test(s)){
        s = s.replace(re,"");
      }
      if(!s) break;
      s = temp;
    }
    
    return !s;
};



/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	temp = s;
    s = s.split("");
    var len = s.length;
    var pos,tmp1,tmp2,tmp3;
    var re = /a|e|i|o|u/;
    pos = s.search(re);
    tmp1 = s[pos];
    temp = temp.slice(pos);
    while(pos!==-1){
    	tmp3 = tmp1;
    	tmp1 = s[pos];
    	tmp2 = tmp3;
    	temp = temp.slice(pos);
    }

    return s.join("");
};

reverseVowels("hello");
reverseVowels("leetcode");