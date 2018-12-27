/**
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 */

/** 
 * 全排列
*/
 /**
  * 
  * @param {String} str 
  * @return {Array}
  */
function Permutation(str){
  let res = [];
  if(str.length === 0 || str.length === 1) return str;
  let preRes = Permutation(str.slice(1));
  for(let i = 0; i < preRes.length; i++){
    for(let j = 0; j < preRes[i].length + 1; j++){
      let tmp = preRes[i].slice(0,j)+str[0]+preRes[i].slice(j);
      res.push(tmp);
    }
  }
  return [...new Set(res)];
}


// 方法二
function permutations(string) {
  return (string.length == 1) ? [string] : string.split('').map((e, i) => permutations(string.slice(0,i) + string.slice(i+1)).map((e2) => e+e2)
  ).reduce((r,e) => r.concat(e)).sort().filter((e,i,a) => (i==0) || a[i-1] != e);
}