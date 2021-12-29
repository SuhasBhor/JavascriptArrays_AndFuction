let array = new Array();
for(var i = 0; i < 10; i++){
    array[i] = (Math.floor(Math.random()*899)+100);  //Generates The 10 , 3 digit Numbers
}
array = array.sort();
console.log(array);
let max = Math.max.apply(null,array)  //get the max of array
array.splice(array.indexOf(max),1)  //remove max from the array
max = Math.max.apply(null,array)
console.log("Second Largest Number : " + max);  //Print the Second Largest Number
let min = Math.min.apply(null,array)  //get min of array
array.splice(array.indexOf(min),1)   // remove min from the array
min = Math.min.apply(null,array)
console.log("Second Smallest Number : " + min);  //Print the Second Smallest Number