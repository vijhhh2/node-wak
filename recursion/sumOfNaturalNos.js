function sumOfNaturalNos(num, result = 0) {
    if(num === 0) {
        return num;
    }

    return sumOfNaturalNos(num - 1) + num;
}

console.log(sumOfNaturalNos(10));