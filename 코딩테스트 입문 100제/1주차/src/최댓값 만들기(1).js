function solution(numbers) {
    var answer = 0, temp_answer = 0;
    
    for (let i = 0; i<numbers.length; i++){
        for (let j = 0; j<numbers.length; j++){
            if (i != j){
                temp_answer = numbers[i] * numbers[j];
                if (temp_answer > answer) {
                    answer = temp_answer;
                }
            }
        };
    };
    return answer;
}