function reverseString(str) {
    // base case to exit the loop
    if(str.length === 0) return '';
    // smallest amount of work can be done in one call
    return reverseString(str.slice(1, str.length)) + str[0];
}

console.log(reverseString('vij'));