function solution(s) {
    let answer = 0; // 올바른 괄호 문자열이 되는 회전 횟수를 누적

    // s를 왼쪽으로 i칸 회전했을 때의 문자열을 검사 (i = 0..n-1)
    for (let i = 0; i < s.length; i++) {
        let stack = [];       // 현재 회전에서 괄호 짝 검사용 스택
        let isCorrect = true; // 현재 회전 문자열이 올바른지 여부(불일치 발견 시 false로 전환)

        // 회전된 문자열을 한 글자씩 순회하며 검증
        for (let j = 0; j < s.length; j++) {
            // (i + j) % s.length를 통해 s를 실제로 회전시키지 않고 모듈러 인덱싱으로 접근
            const c = s[(i + j) % s.length];

            // 1) 여는 괄호면 스택에 push 후 다음 문자로 진행
            if (c == "(" || c == "{" || c == "[") {
                stack.push(c);
                continue; // 여는 괄호는 더 볼 것 없이 다음 문자
            } else {
                // 2) 닫는 괄호인데 스택이 비어 있으면 매칭 불가 → 즉시 실패
                if (stack.length == 0) {
                    isCorrect = false;
                    break; // fail-fast
                }
            }

            // 3) 닫는 괄호에 대해 스택 top과 짝이 맞는지 확인
            const top = stack[stack.length - 1];

            // c가 닫는 괄호일 때, top이 대응하는 여는 괄호여야 함
            if (c == ")" && top == '(') {
                stack.pop();   // 정상 매칭, 스택에서 짝 제거
                continue;      // 다음 문자로
            } else if (c == "}" && top == '{') {
                stack.pop();
                continue;
            } else if (c == "]" && top == '[') {
                stack.pop();
                continue;
            } else {
                // 짝이 맞지 않으면 실패
                isCorrect = false;
                break; // fail-fast
            }
        }

        // 4) 전체 순회를 무사히 마쳤고 스택도 비었으면 올바른 괄호 문자열
        if (isCorrect && stack.length == 0) {
            answer += 1;
        }
    }

    return answer; // 가능한 회전 수 반환
}


// 다른 사람의 풀이
function solution(s) {
    if(s.length % 2 === 1) return 0;

    let answer = 0;
    const mapping = { "}" : "{", "]" : "[", ")" : "("}; // mapping 객체를 두어, 체크 한 것이 특징

    for(let i = 0; i < s.length; i++) {
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        let flag = true;

        for(let j = 0; j < s.length; j++) {
            if(rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{" )
                stack.push(rotate[j]);
            else {
                const last = stack.pop();
                if(last !== mapping[rotate[j]]) {
                    flag = false
                    break;
                }
            }
        }

        if(flag) answer++;
    }

    return answer;
}
