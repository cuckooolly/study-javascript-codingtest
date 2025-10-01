function solution(s) {
    let stack = [];

    for (let c of s){
        if (stack.length == 0){
            stack.push(c)
        } else if(stack[stack.length-1] == c){
            stack.pop();
        }
    }
    return stack.length == 0 ? 1 : 0;
}

// GPT에게 힌트를 얻어 푼 코드
function solution(s) {
    let stack = [];

    for (let c of s) {
        if (stack.length > 0 && stack[stack.length - 1] === c) {
            stack.pop(); // 같은 알파벳이면 제거
        } else {
            stack.push(c); // 다르면 스택에 쌓기
        }
    }
    return stack.length == 0 ? 1 : 0;
}