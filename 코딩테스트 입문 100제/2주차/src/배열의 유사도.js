function solution(s1, s2) {
    var answer = 0;

    for (oneElement of s1){
        for (twoElement of s2){
            if (oneElement == twoElement){
                answer += 1;
            }
        }
    }

    return answer;
}