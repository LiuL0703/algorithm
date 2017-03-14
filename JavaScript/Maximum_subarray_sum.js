/**
 * 最大子列和
 * @authors Your Name (you@example.org)
 * @date    2017-03-14 18:56:59
 * @version $Id$
 */
function maxSequence(arr){
	var len = arr.length;
	var this_sum = 0,
		max_sum = 0,
		i;
	for( i = 0;i < len; i++){
		this_sum += arr[i];
		if(this_sum > max_sum){
			max_sum = this_sum;
		}else if(this_sum < 0){
			this_sum = 0;
		}
	}
	return max_sum;
}


