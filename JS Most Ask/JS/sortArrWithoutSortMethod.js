
//Sort array without using sort method

var arr = [30, 50, 10, 20, 10];
for(let i = 0; i < arr.length; i++ ) {
   for(let j = i + 1; j < arr.length; j++) {
     if(arr[i] > arr[j]) {
       temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
     }
   }
}
console.log("arr", arr)