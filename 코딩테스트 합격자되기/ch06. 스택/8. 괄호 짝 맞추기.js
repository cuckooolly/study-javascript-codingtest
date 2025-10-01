function solution(s) {
    const stack = [];
    // 주어진 문자열을 순회
    for (const c of s){
        // 닫는 괄호가 있는지 확인
        if (c == '(') {
            // 닫는 괄호를, stack에 push 연산을 수행
            stack.push(c);
            // 여는 괄호가 있는지 확인
        } else if (c == ')') {
            // 스택에 값이 없다면,
            if (stack.length == 0){
                // 맞는 괄호가 없다는 의미이므로, False를 반환
                return false
                // 스택에 값이 있다면,
            } else {
                // 맞는 괄호가 있다는 의미이므로, pop 연산을 수행
                stack.pop();
            }
        }
    }
    // 마지막으로 한번 더, 스택에 값이 남아 있는지를 확인
    return stack.length == 0;
}

console.log(solution("()()"));
console.log(solution("(()("));