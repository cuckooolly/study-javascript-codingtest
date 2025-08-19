function solution(i, j, k) {
    var answer = 0;

    for (let idx=i; idx<=j; idx++) {
        idx = String(idx);
        for (idx_sub of idx){
            if (idx_sub.includes(k)) {
                answer += 1;
            }
        }
    }

    return answer;
}