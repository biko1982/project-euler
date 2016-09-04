// Logging all first f Fibonacci-terms

var p = 1; //previous number
var i = 1; //current number
var n = 1; //next number
var f = 1; //fibonacci term

while(f <= 10)
{
	i = n;
	console.log(i);
	n = p + i;
	p = i;
	f++
}


//Sum of all even Fibonacci terms not exceeding 4000000

var p = 1, i = 1, n = 1, sum = 0; //p = previous, i = current and n = next number

while(n < 4000000)
{
	i = n;
	if(n % 2 ===0)
	{
		sum = sum + i;
	}
	n = p + i;
	p = i;
	
}
console.log(sum);
