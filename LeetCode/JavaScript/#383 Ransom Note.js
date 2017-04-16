/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(r, m) {
  var len_r = r.length;
  var len_m = m.length;
  if(len_r>len_m){return false;}
  r = r.split('');
  r.map(function(ele){
    m = m.replace(ele,"");
  });
  return len_m==m.length+len_r?true:false;
};