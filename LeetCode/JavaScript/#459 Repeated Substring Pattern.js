/**
 * @param {string} s
 * @return {boolean}
 */

// TLE
var repeatedSubstringPattern = function(s) {
    var len = s.length
    if(len===1) return false;
    var flag = Math.ceil(len/2);
    var temp = s;
    var count = 0;
    var re;
    while(flag){
      count++;
      flag--;
      if(len%count!==0){
		continue;
      }
      re = new RegExp(s.slice(0,count));
      while(re.test(s)){
        s = s.replace(re,"");
      }
      if(!s) break;
      s = temp;
    }
    return !s;
};


var repeatedSubstringPattern = function(s){
	var len = s.length;
	var half = Math.floor(len/2);

	for(let i = 1;i <= half; i++){
		if(len % i!==0){
			continue;
		}
		var cur = s.substr(0,i);
		var flag = true;
		for(let j = i; j <= len-i;j+=i){
			if(s.substr(j,i)!==cur){
				flag = false;
				break;
			}
		}
		if(flag){
			return true;
		}
	}
	return false;
}

