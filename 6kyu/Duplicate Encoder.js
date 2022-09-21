function duplicateEncode(word){
    // ...
  let arr = word.toLowerCase().split("")
  let brackets = arr.map(element => (arr.filter(letter => element === letter).length > 1) ? ")" : "(")
  return brackets.join("")
}