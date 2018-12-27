/**
 * 一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。请写程序找出这两个只出现一次的数字。
 * 
 */

function FindNumsAppearOnce(array){
  let res = []
  for(let i = 0; i < array.length; i++){
    let pos = res.indexOf(array[i]);
    if(pos !== -1){
      res.splice(pos,1);
    }else{
      res.push(array[i]);
    }
  }
  return res;
}

// 方法二
function FindNumsAppearOnce(array){
    let res=[];
    for(let i=0;i<array.length;i++){
        if(array.indexOf(array[i])==array.lastIndexOf(array[i])){
          res.push(array[i]);
        }
    }
    return res;
}