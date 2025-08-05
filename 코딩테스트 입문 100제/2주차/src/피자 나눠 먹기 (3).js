function solution(slice, n) {
    var answer = 0;

    answer = n / slice;
    answer = Math.ceil(answer);

    return answer;
}