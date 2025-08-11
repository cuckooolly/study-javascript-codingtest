function solution(my_string) {
    var answer = '';

    answer = new Set(my_string);
    answer = [...answer].join("")

    return answer;
}