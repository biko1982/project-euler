function isPrime(num) {
    var sqrt = Math.floor(Math.sqrt(num));
    
    if(num < 2) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    for (var i = 2; i <= sqrt; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

var num = 600851475143;
function maxPrimeFactor(check){
    for (i = Math.floor(check / 2) ; i > 0; i--) {
        if (isPrime(i) && check%i === 0) {
            return i;
            
        }
    }
}

var start = new Date().getTime();
console.log('Answer: ' + maxPrimeFactor(num));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');
