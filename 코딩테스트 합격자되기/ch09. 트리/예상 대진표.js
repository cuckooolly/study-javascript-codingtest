function solution(N, A, B){
    let result = 0;

    while (A != B) {
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);
        result += 1;
    }
    return result
}

console.log(solution(8, 4, 7));