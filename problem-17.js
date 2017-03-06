var a = new Array(1001);
a[0] = "and";
a[1] = "one";
a[2] = "two";
a[3] = "three";
a[4] = "four";
a[5] = "five";
a[6] = "six";
a[7] = "seven";
a[8] = "eight";
a[9] = "nine";
a[10] = "ten";
a[11] = "eleven";
a[12] = "twelve";
a[13] = "thirteen";
a[14] = "fourteen";
a[15] = "fifteen";
a[16] = "sixteen";
a[17] = "seventeen";
a[18] = "eighteen";
a[19] = "nineteen";
a[20] = "twenty";
a[30] = "thirty";
a[40] = "fourty";
a[50] = "fifty";
a[60] = "sixty";
a[70] = "seventy";
a[80] = "eighty";
a[90] = "ninety";
a[100] = "hundred";
a[1000] = "thousand";

var count = 0;
var T = function(x){
    if (a[x] !== undefined && x < 100){
        return a[x];	
    }else{
        t = 10 * Math.floor( x / 10 );
        e = x - t
        return a[t] + a[e];	
    }
};

var H = function(y){
    h = String(y)[0];
    q = Math.pow(10, String(y).length - 1);
    hBase = a[h] + a[q]; 
    if (y % q === 0){
    	return hBase;
    }else{
        r = y - (q * h);
        return hBase + a[0] + T(r);	
    }
};



for (i = 1; i <= 1000; i++){
    if(i < 100){
    	console.log(T(i) + " " + T(i).length)
    	count += T(i).length;
    }else if(i <= 1000){
    	console.log(H(i) + " " + H(i).length)
    	count += H(i).length;
    }
}
console.log(count);
