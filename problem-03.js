var maxPrimeFactor = function(input){

    var division = input;
    var divisor = 3;

    while(division > 1 && division % 2 === 0){
        division /= 2;
        if (division === 1){
        	return 2;

    }
    while(division > 1 ){
        while (division % divisor === 0){
        division /= divisor;

        }
        divisor += 2;

    }

	return divisor - 2;
};
}
var num = 600851475143 ;

var start = new Date().getTime();
console.log('Answer: ' + maxPrimeFactor(num));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');
