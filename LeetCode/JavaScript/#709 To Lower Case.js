/**
 * Implement function ToLowerCase() that has a string parameter str, 
 * and returns the same string in lowercase.
 * 
 * 
 * Example 1:
 * 
 * Input: "Hello"
 * Output: "hello"
 * ------------------
 * Example 2:
 * 
 * Input: "here"
 * Output: "here"
 * ------------------
 * Example 3:
 * 
 * Input: "LOVELY"
 * Output: "lovely"
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    if(!str) return;
    let lens = str.length;
    let res = '';
    let _fromCharCode = String.fromCharCode;
    for(let i = 0; i < lens; i++){
      let charCode = str[i].charCodeAt();
      if( charCode < 91 && charCode > 64){
        res += _fromCharCode(charCode + 32);
      }else{
        res += str[i];
      }
    }
    return res;
};
