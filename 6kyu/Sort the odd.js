function sortArray(array) {
    // Return a sorted array.
    let evenNums = []
    let evenIdx = []
    array.forEach((element, idx) => {
      if (element % 2 === 0) {
        evenNums.push(element)
        evenIdx.push(idx)
      }
    })
    let newArr = array.filter(element => element % 2 !== 0).sort((a, b) => a - b)
    evenNums.forEach((element, idx) => newArr.splice(evenIdx[idx], 0, element))
    return newArr
    }