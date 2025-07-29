function solution(n, t) {
    var answer = n;
    
    for (let time=1; time<=t; time++){
        answer *= 2;
    }
    
    return answer;
}