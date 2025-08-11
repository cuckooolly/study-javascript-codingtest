function solution(my_string) {
    var answer = '';

    answer = my_string.toLowerCase();
    answer = answer.split('').sort().join("");

    return answer;
}