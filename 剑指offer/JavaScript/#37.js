/**
 * 统计一个数字在排序数组中出现的次数。
 */
/**
 * {--------------------总长----------------------}
 * |----(第一次出现)|-----------|(倒数第一次出现)-----|
 *                 {---结果----}
 * 总长 - (第一次出现位置+最后一次出现位置) = 结果
 */
function GetNumberOfK(data, k){
  if(data.indexOf(k) === -1) return 0
  return data.length - (data.indexOf(k)+data.reverse().indexOf(k));
}