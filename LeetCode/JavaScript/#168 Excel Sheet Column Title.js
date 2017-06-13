/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n<=0) return ; 
    var res = "";
    var temp;
    if(n<=26){
      return String.fromCharCode(n+64);
    }else{
    	temp = Math.ceil(n/26)-1;
    	return convertToTitle(temp)+convertToTitle(n-temp*26);
    }
};