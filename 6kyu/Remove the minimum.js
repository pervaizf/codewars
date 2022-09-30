function removeSmallest(numbers) {
    let lowest = numbers[0]
    for (let i = 0; i < (numbers.length - 1); i++) {
      if (lowest > numbers[i + 1]) {
        lowest = numbers[i + 1]
      }
    }
    numbers.splice(numbers.findIndex(element => element === lowest), 1)
    return numbers
  }