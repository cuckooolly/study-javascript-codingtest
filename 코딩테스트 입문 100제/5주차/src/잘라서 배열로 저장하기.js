function solution(my_str, n) {
    var answer = [];

    for (let i=0; i<my_str.length; i+=n){
        answer.push(my_str.slice(i,i+n));
    }

    return answer;
}

// 다른 사람의 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
