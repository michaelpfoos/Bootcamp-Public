Number.prototype.isPrime = function() {

    if (Math.sqrt(this) % 2 == 0) {
        var max = Math.sqrt(this);
    }
    else var max = this;

    for( let i=2; i<max; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;   
}


const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) { //e5 or e6 to pull a hundred thousand or a million prime numbers.  I didn't finish the hundred thousand.  It ran for over 244 seconds and I killed it.  I get the point, it's cpu intensive.  
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

