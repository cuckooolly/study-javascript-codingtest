// 내가 푼 문제
function solution(quiz) { // 주어진 수식 배열 quiz를 입력받아 각 수식의 정오를 판별하는 함수
    var answer = []; // 최종 결과("O" 또는 "X")를 저장할 배열

    // quiz 배열에 있는 각 수식을 하나씩 반복
    for (q of quiz) {
        // 정규표현식을 사용하여 수식에서 숫자 3개(X, Y, Z)를 추출 (음수 포함)
        // 예: "3 - 4 = -3" → ["3", "4", "-3"]
        const nums = q.match(/-\d+|\d+/g) || [];

        // 정규표현식을 사용하여 수식의 연산자(+, -)만 추출
        // \s([+-])\s : 공백 양 옆에 있는 + 또는 - 기호만 캡처
        // 이 부분에서 틀려, GPT의 도움을 받았습니다.
        // 예: "3 - 4 = -3" → rlgh = "-"
        const rlgh = q.match(/\s([+-])\s/)[1] || [];

        // 추출한 숫자 문자열을 정수로 변환
        const a = parseInt(nums[0]); // 첫 번째 숫자 X
        const b = parseInt(nums[1]); // 두 번째 숫자 Y
        const c = parseInt(nums[2]); // 세 번째 숫자 Z

        // 추출한 연산자에 따라 수식을 검증
        switch (rlgh) {
            case '+': // 연산자가 "+"일 때
                if (a + b == c) { // X + Y === Z라면
                    answer.push("O"); // 정답 → "O" 추가
                } else {
                    answer.push("X"); // 오답 → "X" 추가
                }
                break;
            case '-': // 연산자가 "-"일 때
                if (a - b == c) { // X - Y === Z라면
                    answer.push("O"); // 정답 → "O" 추가
                } else {
                    answer.push("X"); // 오답 → "X" 추가
                }
                break;
        }
    }
    return answer; // "O" 또는 "X"가 담긴 결과 배열 반환
}


// 다른 사람이 푼 문제
function solution(quiz) { // 문자열 배열 quiz를 입력받아 각 수식의 정오를 판별하는 함수
    var answer = []; // (현재는 사용되지 않지만 남아 있는 변수, 제거 가능)

    return quiz.map(t => { // quiz 배열을 순회하며 각 수식을 판별하고 새로운 배열로 반환
        // t 예시: "3 - 4 = -3"

        // 수식을 ' = ' 기준으로 좌변(calc)과 우변(result)으로 분리
        // 예: "3 - 4 = -3" → calc = "3 - 4", result = "-3"
        const [calc, result] = t.split(' = ');

        // 연산자가 '+'이면 sign = 1, 아니면 '-'이므로 sign = -1
        // 덧셈인지 뺄셈인지 구분하는 역할
        const sign = calc.includes('+') ? 1 : -1;

        // 좌변(calc)을 공백과 연산자를 기준으로 분리하여 두 숫자 a, b를 추출
        // 예: calc = "3 - 4" → sign = -1 → calc.split(' - ') → a="3", b="4"
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        // 계산 결과(+a + sign*b)가 result와 같은지 비교 후 "O" 또는 "X" 반환
        // +a, +b, +result는 문자열을 숫자로 변환하는 단항 연산자
        return +a + (+b * sign) === +result ? 'O' : 'X';
    });
}
