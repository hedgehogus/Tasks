function start(){
    let primes = findPrimeNumbers();   
    let result = findMaxPal(primes); 
    console.log(result.palindrome);
    console.log(result.first);
    console.log(result.second);
    
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

// finding maximum palindrome number after multiplication
function findMaxPal(arr){
    let length = arr.length;
    let maxPal = 0;       
    let result;

    for (let i = length-1; i > 0; i--){
        
        for(let j = length-1; j >= i; j--){
            let prod = arr[i]*arr[j];
            
            //if product of two numbers is less then max palindrome - we do not need other computatinons for this first number;
            if(prod < maxPal){                
                break;
            }

            // if we found palindrome for bigger numbers, we do not need to find for less numbers
            if (isPalindrome(prod)){                
                if(prod>maxPal){ //checking if this result is maximum
                    maxPal=prod;
                    result={palindrome: prod, first:arr[i], second:arr[j]}                    
                }
                break;
            }
            
        }
    } 
    
    if (typeof result === "undefined"){
        result={palindrome: "did not find", first:undefined, second:undefined}  
    }
    
    return result;

}



//checking if the number is palindrome
function isPalindrome(number){    
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
