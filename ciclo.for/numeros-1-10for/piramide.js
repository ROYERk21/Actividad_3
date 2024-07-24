for (let i = 1; i <= 10; i++) {
    let output = i;
    if (i % 2 !== 0) {
        output += '*'.repeat(i);
    }
    console.log(output);
}