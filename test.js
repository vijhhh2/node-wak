function steps(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                line += '#'
            } else {
                line += ' ';
            }
        }
        line += '\n';
        console.log(line);
    }
}

steps(3);