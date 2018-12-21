/**
 * 斐波那契数列
 * 现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）n<=39
 */


/**
 * 
 * @param {Number} n 
 */
function Fibonacci(n){
    // if(n === 1 || n === 0) {
    //   return n;
    // }
    // return Fibonacci(n-1) + Fibonacci(n-2);
    let f=0,g=1;
    while(n--){
        g+=f;
        f=g-f;
    }
    return f;
}

