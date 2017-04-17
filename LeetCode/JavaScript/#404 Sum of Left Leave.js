/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// recursive
var sumOfLeftLeaves = function(root) {
	var sum = 0;
    if(root===null){
    	return 0;
    }
    if(root.left!==null){
    	if(root.left.left===null&&root.left.right===null){
	   		sum +=root.left.val;
	   	}else{
	   		sum+=sumOfLeftLeaves(root.left);
	   	}
    }
    sum+=sumOfLeftLeaves(root.right);
   	return sum;
};

// iterative
var sumOfLeftLeaves = function(root){
	if(root===null) return 0;
	var s = [root];
	var sum = 0;
	var temp;
	while(s.length!==0){
		temp = s.pop();
		if(temp.left!==null){
			if(temp.left.left===null&&temp.left.right===null){
				sum +=temp.left.val;
			}else{
				s.push(temp.left);
			}
		}
		if(temp.right!==null){
			if(temp.right.left===null&&temp.right.right===null){
				s.push(temp.right);
			}
		}
	}
	return sum;
};