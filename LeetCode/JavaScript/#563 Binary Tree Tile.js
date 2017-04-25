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
/*var findTilt = function(root) {
	var res = 0;
	var temp;
    if(root===null){
    	return 0;
    }
    if(root.left&&root.right){
    	temp = Math.abs(root.left.val-root.right.val);
    	res = res+temp+findTilt(root.left)+findTilt(root.right);
    }else if(root.left){
    	temp = root.left.val;
    	res = res+temp+findTilt(root.left);
    }else if(root.right){
    	temp = root.right.val;
    	res = res+temp+findTilt(root.right);
    }
    return res;
};
*/

var findTilt = function(root) {
	var res = 0;
	function sum(root){
		
		if(root===null){
	    	return 0;
	    }
	    let left = sum(root.left);
	    let right = sum(root.right);
		res +=Math.abs(left-right);
		return root.val+left+right;
	}
    sum(root);
    return res;
};
