/**
 * 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
 * 每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格（35,37），
 * 因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。
 * 请问该机器人能够达到多少个格子？
 */

/**
 * 
 * @param {*} threshold 
 * @param {*} rows 
 * @param {*} cols 
 */
function movingCount(threshold, rows, cols){
  let visited = [];
  for(let i = 0; i < rows; i++){
    visited.push([]);
    for(let j = 0; j < cols; j++){
      visited[i][j] = false;
    }
  }
  return move(0,0,rows,cols,visited,threshold);
}

function move(i, j , rows, cols, visited, threshold){
  if(i < 0 || i === rows || j < 0 || j === cols || visited[i][j]||(getSum(""+i+j)> threshold)){
    return 0;
  }
  visited[i][j] = true;
  return 1 + move(i + 1, j, rows, cols, visited, threshold)
      + move(i, j + 1, rows, cols, visited, threshold)
      + move(i - 1, j, rows, cols, visited, threshold)
      + move(i, j - 1, rows, cols, visited, threshold)
}

function getSum(tmp){
  let sum = 0;
  for(let k = 0; k < tmp.length; k++){
    sum += tmp.charAt(k)/1;
  }
  return sum;
}
