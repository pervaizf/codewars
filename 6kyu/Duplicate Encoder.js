function duplicateEncode(word){
    // ...
  let brackets = word.toLowerCase().split("").map(element => (word.split("").filter(letter => element === letter).length > 1) ? ")" : "(")
  return brackets.join("")
}