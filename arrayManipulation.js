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


const formatArrayStrings = (strings, nums) => {
    const processedNums = processArray(nums);

    return strings.map((str, i) => {
    if (processedNums[i] % 2 == 0) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
    });
}

const strings = ["hello", "world", "Student"]
const nums = [1,2,3,4,5,6]

console.log(formatArrayStrings(strings, nums))

module.exports = formatArrayStrings;