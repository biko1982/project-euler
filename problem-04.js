function numGen(digits){
    var dec = 1;
    var start = Math.pow(10, dec - 1);
    var end = Math.pow(10,  dec);
    for(var i = start; i < end; i++){
     	for(var j = start; j < end; j++){
    	    console.log( i * j );
        }
    }
}


function checkPalindrome(num){

    var p = String(num);
    var pL = p.length;
    var q = 0;
    
    for (var i = 0; i < pL; i++){
        q = pL - i - 1;
    	if (p[i] !== p[q]){
	        return false;
	    }
	}
    return true;
}

function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {
  	console.log(o, i);
  	
  }
  return o;
}

function checkPalindrome(num){

    var p = String(num);
    return reverse(p) === p;
}


