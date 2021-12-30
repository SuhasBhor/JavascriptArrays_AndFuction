var array = [-3,-2,-1,0,1,2,3]    //Array's Of Numbers Form Which We Are Taking Elements

for (let i = 0; i < array.length-2; i++) {  
    for (let j = i+1; j < array.length-1; j++) {
         for (let k = j+1; k < array.length; k++) {
             if(array[i]+array[j]+array[k] == 0){    //Check Wheter Sum Is Equal To Zero 
                console.log(array[i],array[j],array[k]);   
             } 
         }
    } 
}
