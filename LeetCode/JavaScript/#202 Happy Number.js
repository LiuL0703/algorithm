/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	var sum = 0;
	var temp;
	var hash = {};
	while(n){
		while(n!==0){
			temp = n%10;
			sum = sum+temp*temp;
			n = Math.floor(n/10);
		}
		if(sum===1){
			return true;
		}
		if(!hash[sum]){
			hash[sum] = 1;
		}else{
			return false;
		}
		n = sum;
		sum = 0;
	}

};
