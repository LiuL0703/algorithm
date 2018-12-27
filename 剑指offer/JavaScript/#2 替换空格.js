/**
 * 请实现一个函数，
 * 将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */

 /**
  * 思路：正则
  */
/**
 * @param {String} str 
 * @return {String}
 */ 
function replaceSpace(str) {
  return str.replace(/[ ]/gi, '%20');
}