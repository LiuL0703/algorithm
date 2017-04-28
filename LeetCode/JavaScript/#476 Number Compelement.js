/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    num = num.toString(2);
    var len = num.length;
    var res=[];
    for(let i=0;i<len;i++){
      if(num[i]==="1"){
        res.push(0);
      }else{
        res.push(1);
      }
    }
    num = res.join("");
    return parseInt(num,2);
};