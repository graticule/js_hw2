function getPrimes(n) {
    let primes = [2];

    if(n < 1){
        return []
    } else if (n === 1) {
        return primes;
    }
    let nextNumber = 3 
    while(primes.length < n) {
        let isPrime = true;
        // Проверяем, делится ли число на уже найденные простые числа
        for(let i=0; i < primes.length; i++){
            // console.log(nextNumber, primes[i], nextNumber % primes[i])
            if( nextNumber % primes[i] === 0 ){
                isPrime = false;
                break;
            }
        }
        // console.log(nextNumber, isPrime);
        if(isPrime){
            primes.push(nextNumber)
        }
        nextNumber = nextNumber + 2;
    }
    return primes;
}

console.log(getPrimes(-3))
console.log(getPrimes(3))
console.log(getPrimes(10))