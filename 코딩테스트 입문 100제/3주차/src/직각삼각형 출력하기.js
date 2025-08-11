console.time(); // 측정 시작

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const number = Number(input[0]);

    /* 문제 풀이 영역 */
    for(let i=1; i<=number; i++){
        let star_line = "";
        for(let j=0; j<i; j++){
            star_line += "*";
        }
        console.log(star_line);
    }
});

console.timeEnd(); // 측정 종료 (default: 10.386ms)

// 다른 사람의 풀이
console.time(); // 측정 시작

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});

function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}
console.timeEnd(); // 측정 종료 (default: 10.405ms)

