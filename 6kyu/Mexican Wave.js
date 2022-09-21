function wave(str){
    let arr = str.split("")
    return arr.map((ele, idx) => {
     arr.splice(idx, 1, ele.toUpperCase()).join("")
  })
}

  console.log(wave("hello"))