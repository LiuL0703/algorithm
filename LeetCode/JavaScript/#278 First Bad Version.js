/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */


 // Binary Search
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let high = n;
        let low = 1;
        let mid = Math.ceil(high/2);
        let res = 1;
        while (high>=low) {
            if(isBadVersion(mid)){
                if(!isBadVersion(mid-1)){
                    res = mid;
                    break;
                }else{
                    high = mid - 1;
                    mid = Math.floor((high+low)/2);
                }
            }else{
                low = mid + 1;
                mid = Math.floor((high+low)/2);
            }    
        }
        return res;
    };
};