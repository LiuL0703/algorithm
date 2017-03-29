var lengthOfLongestSubstring = function(s){
  s = s.split('');
  var result = 0;
  var temp = [];
  for(var i=0;i<s.length;i++){
    if(s.indexOf(s[i])===-1){
      temp.push(s[i]);
    }else{
      if(temp.length>result){
        result = temp.length;
      }
      // 保留重复出现元素位置之后的所有元素并把当前元素添加
      temp = temp.splice(temp.indexOf(s[i])+1);
      temp.push(s[i]);
    }
  }
  return Math.max(temp.length,result); 
}