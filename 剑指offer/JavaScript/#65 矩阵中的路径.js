/**
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。
 *  例如 a b c e s f c s a d e e 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，
 * 但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，
 * 路径不能再次进入该格子。
 */


function hasPath(matrix, rows, cols, path){
  let pathLen = 0;
  let visited = Array(rows*cols).fill(null);
  for(let row = 0; row < rows; row++){
    for(let col = 0; col < cols; col++){
      if(isHasPath(matrix,rows,cols,path,row,col,pathLen, visited)){
        return true;
      }
    }
  }
  return false;
}

// 判断条件是否满足
function isHasPath(matrix,rows,cols,path,row,col,pathLen, visited){
  let hasPath = false;
  if(pathLen === path.length) return true;

  if(row >=0 && row < rows && col >=0 && col < cols && 
    matrix[row*cols+col] === path[pathLen] && !visited[row*cols+col]){
      pathLen++;
      visited[row*cols+col] = true;
      hasPath = isHasPath(matrix,rows,cols,path,row+1,col,pathLen, visited)||
                isHasPath(matrix,rows,cols,path,row-1,col,pathLen, visited)||
                isHasPath(matrix,rows,cols,path,row,col+1,pathLen, visited)||
                isHasPath(matrix,rows,cols,path,row,col-1,pathLen, visited);
      if(!hasPath){
        pathLen--;
        visited[row*cols+col] = false;
      }
  }
  return hasPath;
}