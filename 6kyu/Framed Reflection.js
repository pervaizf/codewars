function mirror(text){
    backwardsText = text.split("").reverse().join("").split(" ").reverse().join(" ")
      longestWord = backwardsText.split(" ").sort((a,b) => b.length - a.length)[0]
      middleofMirror = ""
    backwardsText.split(" ").forEach(element => middleofMirror += `* ${element}${" ".repeat(longestWord.length - element.length)} *\n`)
    return `${"*".repeat(longestWord.length + 4)}\n${middleofMirror}${"*".repeat(longestWord.length + 4)}`
}