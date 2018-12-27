/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 */

/**
 * 思路 ：逆序和顺序的位置保持正常逻辑的话 则证明只有一个 将字符串按顺序遍历 保证为第一个
 */
/**
 * 
 * @param {String} str 
 */
function FirstNotRepeatingChar(str){
  let resStr = str.split('').reverse().join('');
  let length = str.length;
  for(let i = 0; i < length; i++){
    if((str.indexOf(str[i]) + resStr.indexOf(str[i])) === (length - 1)){
      return i;
    }
  }
  return -1;
}