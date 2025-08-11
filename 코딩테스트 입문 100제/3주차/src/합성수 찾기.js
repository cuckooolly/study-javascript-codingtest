function isComposite(n) {
    // 2부터 √n까지 나누어 떨어지는 수가 있으면 합성수
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return true;
        }
    }
    return false; // 소수
}

function solution(n) {
    var answer = 0;

    for (let i=4; i<=n; i++) {
        if (isComposite(i)) {
            answer += 1;
        }
    }

    return answer;
}