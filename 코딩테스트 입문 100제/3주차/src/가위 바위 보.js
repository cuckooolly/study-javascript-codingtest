console.time(); // 측정 시작
function solution(rsp) {
    var answer = '';

    for (r of rsp) {
        if (r == "2") {
            answer += "0";
        } else if (r == "0") {
            answer += "5";
        } else if (r == "5") {
            answer += "2";
        }
    }

    return answer;
}
console.timeEnd(); // 측정 종료 (default: 0.007ms)

// 다른 풀이 방법

console.time(); // 측정 시작
function solution(rsp) {
    return rsp.split('').map(r => {
        if (r === "2") return "0";
        if (r === "0") return "5";
        if (r === "5") return "2";
    }).join('');
}
console.timeEnd(); // 측정 종료 (default: 0.007ms)