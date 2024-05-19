const processArray = (arr) => {
    for (const element of arr) {
    if (element % 2 == 0) {
        console.log(element*element)
    }else(
        console.log(element*3)
    )
    }
    return arr;
}
num = [2,5,6,9,12,15]
console.log(processArray(num));