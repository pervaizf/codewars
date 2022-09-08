function howMuchILoveYou(nbPetals) {
    // your code
  let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
  if (nbPetals % 6 === 0) {
    return arr[arr.length - 1]
  } else return arr[(nbPetals % 6) - 1]
}