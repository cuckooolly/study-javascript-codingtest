function solution(n) {
    // 최대공약수를 구하는 함수
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // 최소공배수를 구하는 함수
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // 6과 n의 최소공배수를 구하고, 6으로 나누어 피자 판 수 계산
    return lcm(6, n) / 6;
}