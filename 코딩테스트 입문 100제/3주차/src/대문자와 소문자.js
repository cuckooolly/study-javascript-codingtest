function solution(my_string) {
    var answer = '';

    for (char of my_string) {
        if (char == char.toUpperCase()){
            answer += char.toLowerCase();
        } else {
            answer += char.toUpperCase();
        }
    }

    return answer;
}