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

var check = 600851475143;

for (i = Math.floor(Math.sqrt(check)) ; i > 0; i--) {
    if (isPrime(i) && check%i === 0) {
        console.log(i);
        break;
    }
}
