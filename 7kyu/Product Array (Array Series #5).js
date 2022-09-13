function productArray(numbers){
    return numbers.map(element => numbers.reduce((acc, c) => acc * c, 1) / element)
  }