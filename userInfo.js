const formatArrayStrings = require('./arrayManipulation');

const createUserProfile = (names, modNames) => {
return names.map((name, index) => ({
    id: index + 1,
    originalName: name,
    modifiedName: modNames[index]
}))
}

const originalNames = ["kofi", "John", "jiMMy"]
const nums = [1,2,4]
const modNames = formatArrayStrings(originalNames,nums)
const newUser = createUserProfile(originalNames, modNames)

console.log(newUser)