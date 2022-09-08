/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/

const stantonMeasure = (arr, n) => {
    let newArr = arr.filter(element => element === 1).length
    return arr.filter(element => element === newArr).length
    }