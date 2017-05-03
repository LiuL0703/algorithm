/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    var flag = "0".charCodeAt()*2;
    var carry = 0;
    var tmp = Math.abs(len1-len2);
    var res= "";
    for(let i = 0;i<tmp;i++){
      if(len1<len2){
        num1 = "0"+num1;
      }else{
        num2 = "0"+num2;
      }
    }
    for(let i = num1.length-1;i>=0;i--){
      tmp = num1[i].charCodeAt()+num2[i].charCodeAt()-flag+carry;
      res = String(tmp%10)+res;
      carry =Math.floor(tmp/10);
    }
    res = carry===0?res:""+(carry+res);
    return res;
};
