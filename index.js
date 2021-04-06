//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, name) {
    return arr.filter(item => item.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(arr, nameBeginsWith) {
    return arr.filter(item => item.slice(0, nameBeginsWith.length) === nameBeginsWith)
    // return arr.filter(item => nameBeginsWith[0] === item[0] && nameBeginsWith[1] === item[1])
}

function matchName(arr, name) {
    return arr.filter(item => name === item.name)
}