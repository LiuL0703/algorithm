var fizzBuzz = function(n) {
    var res = ["1"];
    var i ;
    for(i = 2; i <= n;i++){
    	if(i%3===0){
    		if(i%5===0){
    			res.push("FizzBuzz");
    			continue;
    		}
    		res.push("Fizz");
    	}else{
    		if(i%5===0){
    			res.push("Buzz");
    		}else{
    			res.push(""+i);
    		}
    	}
    }
    return res;
};

fizzBuzz(100);