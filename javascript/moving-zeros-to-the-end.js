// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// Example: moveZeros([false,1,0,1,2,0,1,3,"a"]) returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    //counts how many zeroes are in the array
    if (arr[i] === 0) {
      count++;
    }
  }
  arr = arr.filter(function(x) {
    return x !== 0;
  }); //deletes everything === 0; (doesn't touch false,[],{})
  while (count != 0) {
    // adds 0 to the end
    arr.push(0);
    count--;
  }
  return arr;
};
