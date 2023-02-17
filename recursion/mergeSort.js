function mergeSort(a, start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        mergeSort(a,start, mid);
        mergeSort(a,mid + 1, end);
        merge(a, start, mid, end);
    }

    return a;
}

function merge(a, start, mid, end) {
    let temp = [];
    let i = start;
    let j = mid + 1;
    let k = 0;
    while (i <= mid && j <= end) {
        if (a[i] > a[j]) {
            temp[k] = a[j];
            j++;
            k++;
        } else {
            temp[k] = a[i];
            i++;
            k++;
        }
    }

    while (i <= mid) {
        temp[k] = a[i];
        i++;
        k++;
    }

    while (j <= end) {
        temp[k]= a[j];
        j++;
        k++;
    }

    for (i = start; i <= end; i++) {
        a[i] = temp[i - start];
    }
}

const a = [7,4,1,0,3,6,2,8];

console.log(mergeSort(a, 0, a.length - 1));
