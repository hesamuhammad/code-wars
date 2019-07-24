function positiveSum(arr) {
    var count = 0
    for (var i = 0; i <= arr.length; i++) { // setup loop to go through array of given length
          if (arr[i] >= 0) {                // if arr[i] is greater than zero
              count += arr[i];              // add arr[i] to count
          }
      }
      return count;                         // return total
  }

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);