function focaccia(n) {
    if ((n === 0) || (n === 1)) {
        return n;
    }

    return  focaccia(n - 1) + focaccia(n - 2);
}


console.log(focaccia(10))