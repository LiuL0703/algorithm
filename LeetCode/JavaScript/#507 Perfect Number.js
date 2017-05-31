/*
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    var base = 1;
    var res = 0;
    if(num===0) return false;
    if(num%10==6||num%10==8){
        if(num===6) return true;
        while(res<num){
            res += Math.pow(base,3);
            base +=2;
        }
    }
    return res===num;
};