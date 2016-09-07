function isPrime(num) {
    var sqrt = Math.floor(Math.sqrt(num));
    
    if(num < 2) {
        return false;
    }

    if (num === 2) {
        return true;
    }
    
    if (num % 2 === 0) {
        return false;
    }
    
    for (var i = 3; i <= sqrt; i += 2) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

var num = 600851475143;
function maxPrimeFactor(check){
    var begin = Math.floor(check / 2)
    for (i = begin ; i > 0; i--) {
        if (isPrime(i) && check%i === 0) {
            return i;
            
        }
    }
}

var start = new Date().getTime();
console.log('Answer: ' + maxPrimeFactor(num));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');
