/**
 * 输入n个整数，找出其中最小的K个数。
 * 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 */


 /** 
  * 思路：找出最小的N个数 不考虑顺序问题 的话 不需要完全遍历 只需要找出N个最小的即可  
  * 拿出N个元素 res 然后遍历剩下 lenght-N个元素 若input[i] 小于 res中最大的 则替换即可
  */
 /**
  * 
  * @param {Array} input 
  * @param {Number} k 
  */
function GetLeastNumbers_Solution(input, k){
  if(input.length < k) return [];
  if(input.length === k) return input.sort((a,b)=> {return a - b});
  let res = input.splice(0,k);
  for(let i = 0; i < input.length; i++){
    let tmp = Math.max(...res);
    if(input[i] < tmp){
      res.splice(res.indexOf(tmp),1,input[i]);
    }
  }
  return res.sort((a,b)=> {return a - b});
}