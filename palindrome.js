function start(){
    //let primes = findPrimeNumbers();    
    //console.log(primes);

    console.log(isPalindrome(1234761234));
    console.log(isPalindrome(123321));
    console.log(isPalindrome(12321));
    console.log(isPalindrome(123421));
    console.log(isPalindrome(124321));
}


function findPrimeNumbers(){
    // all 5-digit numbers lie in this area
    let max = 100000;
    let min = 10000;

    // additional array for finding prime numbers.
    // we do not need to find prime numbers between Math.sqrt(max) and min;
    let prime = [2];
    let maxSqrt = Math.sqrt(max);
    
    // it will be array of 5-digit prime numbers, the result we actually need
    let fiveDigits = [];
    

    // finding prime numbers under Math.sqrt(max);
    for (let i=3; i <= maxSqrt; i++){
        let isPrime = true;
        let sqrt = Math.sqrt(i);
        for(let j = 0; j < prime.length; j++){
            if (prime[i] > sqrt){
                break;
            }
            if (i%prime[j]==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
           prime.push(i);
        }        
    }

    // finding 5-digit prime numbers
    for (let i = min; i < max; i++){
        let isPrime = true;
        for(let j = 0; j < prime.length; j++){
            if (i%prime[j]==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
           fiveDigits.push(i);
        }  

    }

    return fiveDigits;
}


function isPalindrome(number){
    console.log(number);
    let str = number.toString();
    let isPalindr = true;
    let length = str.length;
    for (let i = 0, l = length/2; i<l; i++){
        if (str.charAt(i) !== str.charAt(length-i-1)){            
            isPalindr = false;
            break;
        }
    }
    return isPalindr;
}
