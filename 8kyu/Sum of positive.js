function positiveSum(arr) {
   return arr.filter(element => element >= 0).reduce((acc, c) => +acc + +c, 0)
}

console.log(positiveSum([5, -3, 6, 10]))