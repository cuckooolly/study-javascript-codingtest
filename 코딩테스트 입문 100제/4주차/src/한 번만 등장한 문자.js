// 미 해결 문제
function solution(s) {
    var answer = new String();
    answer = answer.split("");

    for (chr of s) {
        if (answer.includes(chr)) {
            answer = answer.filter(c => c != chr);
        } else {
            answer.push(chr);
        }
    }

    answer = answer.sort().join("");
    return answer;
}

// GPT가 작성한 코드
function solution(s) {
  return [...s]
    .filter(ch => s.indexOf(ch) === s.lastIndexOf(ch))
    .sort()
    .join('');
}