var integer = 105;  //value for which we are finding Prime Factors
var primeFactor = new Array();
let isPrime;
//find divisor starting from 2
for (i=2;i<integer/2;i++){
    if(integer % i == 0){
        //check if divisor is prime
        for(var j=2;j<i/2;j++){
            if(i%j == 0){
                isPrime = false;
            }else{
                isPrime = true;
            }
        }

        //if divisor is prime
        if(isPrime == true){
            integer /= i
            primeFactor.push(i);
        }
    }
}
for(var k = 0; k < primeFactor.length;k++){
    console.log(primeFactor[k]);
}