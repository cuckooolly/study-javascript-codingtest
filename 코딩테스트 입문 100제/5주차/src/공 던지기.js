function solution(numbers, k) {
    var answer = 0;
    let length = numbers.length;
    let idx = 0;

    for (let i=1; i<k; i++){ // k-1번 이동
        console.log(idx);
        idx += 2;
        if (idx >= length) {
            idx -= length;
        }
    }

    return numbers[idx];
}