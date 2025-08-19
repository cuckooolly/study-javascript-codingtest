function solution(n) {
    var answer = 0;
    let temp = 1;

    for (let i=1; i<=10; i++) {
        temp = temp * i;
        if (temp > n) {
            return i-1;
        } else if (temp == n) {
            return i;
        }
    }

    return answer;
}