// 내 풀이
// 문제점: 30!이 넘어가면 Number의 범위를 초과하여 Infinity가 된다.
function facto(n) {
    let answer = 1;
    for (let i=n; i>1; i--){
        answer *= i;
    }
    return answer;
}

function solution(balls, share) {
    var answer = -Infinity;

    answer = facto(balls) / (facto(balls-share) * facto(share));

    return answer;
}

// GPT의 풀이
function facto(n, k) {
    let res = 1;
    for (let i = 1; i <= k; i++) {
        res = res * (n - k + i) / i; // 매 단계 값이 조합값을 직접 형성 → overflow 없음
    }
    // 부동소수 오차 방지를 위해 반올림
    return Math.round(res);
}

function solution(balls, share) {
    var answer = -Infinity;

    answer = facto(balls, share);

    return answer;
}