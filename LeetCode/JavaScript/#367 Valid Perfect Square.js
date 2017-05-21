/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num===1) return true;
    var high = Math.ceil(num/2);
    var low = 2;
    var mid;
    while(low<=high){
      mid = Math.ceil((low+high)/2);
      if(mid*mid<num){
        low = mid+1;
      }else if(mid*mid>num){
        high = mid-1;
      }else{
        break;
      }
    }
    return mid*mid===num;
};