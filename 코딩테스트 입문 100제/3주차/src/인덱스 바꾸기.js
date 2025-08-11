console.time();

function solution(my_string, num1, num2) {
    var answer = '';

    const char1 = my_string[num1];
    const char2 = my_string[num2];

    for (let i=0; i<my_string.length; i++){
        if (i == num1) {
            answer += char2;
        } else if (i == num2) {
            answer += char1;
        } else {
            answer += my_string[i];
        }
    }

    return answer;
}

solution("hello", 1, 2); // "hlelo"
console.timeEnd(); // default: 0.057ms