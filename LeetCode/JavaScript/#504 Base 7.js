/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var res = [];
    var s;
    if(num<0){
      num = num*-1;
      res.push("-");
    }else{
      res.push("");
    } 
	while(num>0){
	  res.push(""+num%7);
	  num = Math.floor(num/7);
	}
	s = res[0]+res.slice(1).reverse().join("");
	return s;
};


// parseInt(num).toString(base) 