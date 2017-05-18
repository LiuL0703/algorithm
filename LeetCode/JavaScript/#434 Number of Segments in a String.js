/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
   s = s.trim();
   if(s===""){
     return 0;
   }
   var res = 0;
   res = s.replace(/\s+/g," ").split(" ").length;
   return res;
};