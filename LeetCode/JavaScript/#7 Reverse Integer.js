/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) { 
    var flag = "";
    if(x<0){
      flag = "-";
      x = x*-1;
    } 
    x =flag+x.toString().split("").reverse().join("");
    x = Number(x);
    if(x>=2147483647||x<=-2147483648){
      return 0;
    }
    return x;
};