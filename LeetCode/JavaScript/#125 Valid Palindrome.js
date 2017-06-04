/**
 * @param {string} s
 * @return {boolean}
 */
// First
var isPalindrome = function(s) {
    if(s==="") return true;
    s = s.replace(/\W+/g,"").toLowerCase();
    return s==s.split("").reverse().join("");
    var len = s.length;
    if(len%2===0){
      return s.slice(0,len/2)===s.slice(len/2).split("").reverse().join("");
    }else{
      len = Math.floor(len/2);
      return s.slice(0,len)===s.slice(len+1).split("").reverse().join("");
    }
};

// Second
var isPalindrome = function(s) {
    if(s==="") return true;
    s = s.replace(/\W+/g,"").toLowerCase();
    return s==s.split("").reverse().join("");
}


// others way faster than mine
var isPalindrome = function(s) {
    var str = s.replace(/\W/g, '').toLowerCase();
    var left = 0;
    var right = str.length - 1;
    
    while(left < right){
        if(str.charAt(left) !== str.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
};

