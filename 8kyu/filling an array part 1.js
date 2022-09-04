const arr = N => {
    let newArr = []
    for(let i = 0; i < N; i++) {
        newArr.push(i)
    }
    return newArr
};

console.log(arr(10))