function measurePerformance(func, iterations = 100000) {
    console.time('performance');
    for (let i = 0; i < iterations; i++) {
        func();
    }
    console.timeEnd('performance');
}

function test1() { // performance: 19.424ms
    const n = 5;
    for(let i = 1; i <= n; i++){
        let star_line = "";
        for(let j = 0; j < i; j++){
            star_line += "*";
        }
    }
}

function test2() { // performance: 16.692ms
    const n = 5;
    for(let i = 1; i <= n; i++) {
        '*'.repeat(i);
    }
}

measurePerformance(test1); // performance: 19.424ms
measurePerformance(test2); // performance: 16.692ms
