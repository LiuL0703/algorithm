/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    re1 = /\b[A-Z]{1}([a-z]+||[A-Z]+)\b/;
    re2 = /\b[a-z]+\b/;
    if(re1.test(word)||re2.test(word)){
    	return true;
    }else{
    	return false;
    }
};