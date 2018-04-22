/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    let res = '';
    let high = minLengthStr(strs);
    let low = 0;
    let mid = Math.ceil(high/2);
    while(high>=low){
        let tmp = strs[0].slice(0,mid);
        if(strs.every(ele => ele.slice(0,mid) === tmp)){
            res = tmp;
            low = mid + 1;
            mid = Math.floor((high+low)/2);
        }else{
            break;
        }
    }
    if(res === ''){
        mid = Math.ceil(mid/2);
        while(high>=low){
            let tmp = strs[0].slice(0,mid);
            if(!strs.every(ele => ele.slice(0,mid) === tmp)){
                high = mid - 1;
                mid = Math.floor(high/2);
            }else{
                res = tmp;
                break;
            }
        }        
    }
    return res;
};

function minLengthStr(strs){
    var lens = 0;
    if(strs.length!==0){
        lens = strs[0].length;
        for(var i = 1; i < strs.length; i++){
            if(strs[i].length<lens){
                lens = strs[i].length;
            }
        }
    }
    return lens;
}