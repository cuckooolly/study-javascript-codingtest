function solution(array, height) {
    var answer = 0;

    for (person of array){
        if (person > height){
            answer += 1;
        }
    }

    return answer;
}