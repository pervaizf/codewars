function mirror(text){
    backwardsText = text.split("").reverse().join("").split(" ").reverse().join(" ")
      longestWord = backwardsText.split(" ").sort((a,b) => b.length - a.length)[0]
      middleofMirror = ""
    backwardsText.split(" ").forEach(element => middleofMirror += `* ${element}${" ".repeat(longestWord.length - element.length)} *\n`)
    return `${"*".repeat(longestWord.length + 4)}\n${middleofMirror}${"*".repeat(longestWord.length + 4)}`
}

// optimal solution:

function mirror(s){
    let a = s.split(' ');
    let m = Math.max(...a.map(x=>x.length));
    a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
    return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
  }