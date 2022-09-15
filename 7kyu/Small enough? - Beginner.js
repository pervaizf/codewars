function smallEnough(a, limit){
    return a.length === a.filter(element => element <= limit).length
    }