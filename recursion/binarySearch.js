function binarySearch(a, l, r, x) {
    if (l > r) {
        return -1;
    }
    const midpoint = Math.floor((l + r) / 2);

    if (x === a[midpoint]) {
        return midpoint;
    }

    if (x < a[midpoint]) {
        return binarySearch(a, l, midpoint - 1, x);
    }

    return binarySearch(a, midpoint + 1, r, x)
}

const a = [-1,0,1,2,3,4,5,6,7,8,9,10,20];

console.log(binarySearch(a, 0, a.length - 1, 10));