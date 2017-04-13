/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    var width = Math.sqrt(area);
    var i,length;
    if(width === parseInt(width,10)){
      return [width,width];
    }else{
      for(i=parseInt(width,10);i>0;i--){
        length = area/i;
        if(length === parseInt(length,10)){
            return [length,i];
        }
      }
    }
};


// 
var constructRectangle = function(area) {
    let w = Math.floor(Math.sqrt(area));
    while (area % w!==0) w--;
    return [area/w, w];
};