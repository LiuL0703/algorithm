var findWords = function(words) {
    var target1 = "asdfghjkl".split("");
    var target2 = "qwertyuiop".split("");
    var target3 = "zxcvbnm" .split("");
    var len = words.length;
    var temp = [];
    var i,j;
    Outer:
      for(i = 0;i < len;i++){
        var words_arr = words[i].toLowerCase().split('');
        if(target1.indexOf(words_arr[0])!==-1){
          for(j =1;j< words_arr.length;j++){
            if(target1.indexOf(words_arr[j])==-1){
              continue Outer;
            }
          }
          temp.push(words[i]);
        }else if(target2.indexOf(words_arr[0])!==-1){
          for( j =1;j< words_arr.length;j++){
            if(target2.indexOf(words_arr[j])==-1){
              continue Outer;
            }
          }
          temp.push(words[i]);
        }else{
          for( j =1;j< words_arr.length;j++){
            if(target3.indexOf(words_arr[j])==-1){
              continue Outer;
            }
          }
          temp.push(words[i]);
        }   
      }
      return temp;
};