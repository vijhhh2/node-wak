/**
 * merge two arrays
 * @param a {any[]}
 * @param b {any[]}
 */
function merge(a, b) {
    let sortedArray = [];
    let i = 0;
    let j = 0;

    while(i < a.length && j < b.length) {
        if ((a[i]) > b[j]) {
            sortedArray.push(b[j]);
            j++;
        } else {
            sortedArray.push(a[i]);
            i++;
        }
    }

    return [...sortedArray, ...a.slice(i), ...b.slice(j)];
}

/**
 * merge sort implementation
 * @param array {any[]}
 */
function mergeSort(array) {
    // Base case to return
    if (array.length <= 1) {
        return array;
    }
    // Minimum amount of work that needs to be done
    const midPoint = Math.floor(array.length / 2);
    return merge(mergeSort(array.slice(0, midPoint)), mergeSort(array.slice(midPoint)))
}

console.log(mergeSort([7,4,1,8,6]));

// [7,4,1,8,6]
// [7,4]    [1,8,6]
// [7] [4]  [1] [8,6]
//              [8] [6]

//  [4,7]        [8] [6] -> [6,8]
//  [4,7]        [1] [6, 8] -> [1,6,8]
//  [1,4,6,7,8]