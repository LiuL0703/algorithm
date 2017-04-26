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
var getMinimumDifference = function(root) {
	var res=[];
	var ans;
	function arr(root){
		res.push(root.val);
		if(root.left){
			arr(root.left);
		}
		if(root.right){
			arr(root.right);
		}
	}
	arr(root);
	res = res.sort((a,b)=>{return a-b;});
	var len = res.length;
	ans = res[1] - res[0];
	for(var i=1;i<len-1;i++){
		if(res[i+1]-res[i]<ans)
			ans = res[i+1]-res[i];
	}
	return ans;
};

