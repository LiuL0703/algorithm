/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
	var len = numbers.length;
	var table = new Map();
	for(let i=0;i<len;i++){
		if(table.has(numbers[i])){
			return [table.get(numbers[i])+1,i+1];
		}
		table.set((target-numbers[i]),i);
	}
};

// bianry search
var twoSum = function(numbers, target) {
    var len = numbers.length;
    var i = 0;
    var l,r,tmp,mid;
    for(i;i<len;i++){
    	[l,r] = [i+1,len-1];
    	tmp = target-numbers[i];
    	while(l<=r){
    		mid = l +parseInt((r-l)/2);
    		if(numbers[mid]==tmp){
    			return [i+1,mid+1];
    		}
    		else if(numbers[mid]<tmp){
    			l = mid+1;
    		}else if(numbers[mid]>tmp){
    			r = mid-1;
    		}
    	}
    } 
};

// two pointer
var twoSum = function(numbers, target) {
	var len = numbers.length;
	var l,r,tmp;
	[l,r] = [0,len-1];
	while(l<r){
		tmp = numbers[l]+numbers[r];
		if(tmp == target){
			return [l+1,r+1];
		}else if(tmp>target){
			r = r-1;
		}else if(tmp<target){
			l = l+1;
		}
	}
};