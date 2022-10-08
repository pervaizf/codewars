function spinWords(string){
    let newArr = string.split(" ").map((element, idx) => {
      if (element.length >= 5) {
        return element.split("").reverse().join("")
      } else return element
    })
    return newArr.join(" ")
    //TODO Have fun :)
  }