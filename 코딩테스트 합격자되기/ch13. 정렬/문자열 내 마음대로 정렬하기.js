function solution(strings, n) {
    return strings.sort((a, b) => {
        // 음수 반환 → a가 b보다 앞에
        // 양수 반환 → b가 a보다 앞에
        // 0 반환    → 순서 유지
        if (a[n] === b[n]) {
            return a > b ? 1 : -1; // n번째 문자가 같은 경우: 사전 순서 비교
        } else {
            return a[n] > b[n] ? 1 : -1; // n번째 문자가 다른 경우: n번째 문자 비교
        }
    });
}

// 테스트
console.log(solution(["sun", "bed", "car"], 1)); // ["car", "bed", "sun"]