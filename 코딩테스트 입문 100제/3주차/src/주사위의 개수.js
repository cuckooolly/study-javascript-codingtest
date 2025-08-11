console.time(); // 측정 시작

function solution(box, n) {
    var answer = 1;

    for (b of box) {
        answer *= Math.trunc(b/n);
    }

    return answer;
}

console.timeEnd(); // 측정 종료 (default: 0.023ms)

// 다른 사람의 풀이
console.time(); // 측정 시작
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

}
console.timeEnd(); // 측정 종료 (default: 0.02ms)