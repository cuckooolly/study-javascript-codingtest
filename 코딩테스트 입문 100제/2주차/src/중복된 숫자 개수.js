function solution(array, n) {
    var answer = 0;

    for (element of array){
        if (element == n){
            answer += 1;
        }
    }

    return answer;
}