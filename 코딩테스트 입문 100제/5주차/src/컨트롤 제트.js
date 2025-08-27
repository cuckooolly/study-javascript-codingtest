function solution(s) {
    var answer = 0;

    const arr = s.split(" ");

    // Z와 그 이전 숫자를 제거하는 코드
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == "Z"){
            arr.splice(i-1, 1); // Z 앞의 숫자를 제거
        }
    }

    // 나온 숫자를 더하는 코드
    for (a of arr) {
        if (a == "Z"){ // Z가 나온 경우에는 넘기기
            continue;
        } else {
            answer += parseInt(a);
        }
    }

    return answer;
}


// 다른 사람의 풀이: Stack을 이용한 풀이
function solution(s) {
    const stack = []

    s.split(' ').forEach((target) => {
        if(target === 'Z') stack.pop();
        else stack.push(+target)
    })

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}