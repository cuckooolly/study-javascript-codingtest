function solution(n, numlist) {
    var answer = [];

    for (num of numlist){
        if (num % n == 0){
            answer.push(num);
        }
    }

    return answer;
}