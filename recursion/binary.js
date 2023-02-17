function findBinary(num, result='') {
    if(num === 0) {
        return result;
    }

    result = (num % 2) + result;
    return findBinary(Math.floor(num / 2), result);
}

console.log(findBinary(233));