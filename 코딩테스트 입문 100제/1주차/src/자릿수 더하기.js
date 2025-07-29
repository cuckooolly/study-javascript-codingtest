function solution(n) {
    var answer = 0;
    
    const numbers = n.toString().split('').map(Number);
    for (num of numbers){
        answer += num;
    }
    
    return answer;
}