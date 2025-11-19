function solution(N) {
    const result = []; // 조합 결과를 담을 배열

    function backtrack(sum, selectedNums, start) {
        if (sum === 10) { // 합이 10이 되면 결과 배열에 추가
            result.push(selectedNums);
            return;
        }

        // 다음에 선택할 수 잇는 숫자들을 하나씩 선택하면서
        for (let i = start; i <= N; i++) {
            if (sum + i <= 10) { // 선택한 숫자의 합이 10보다 작거나 같으면
                backtrack(sum + i, selectedNums.concat(i), i+1); // 백트래킹 함수를 재귀적으로 호출

                // 왜 selectedNums.concat(i) 인가?
                // selectedNums.concat(i)는 현재 선택된 숫자 배열(selectedNums)에 새로운 숫자 i를 추가한 새로운 배열을 생성합니다.
                // 이는 기존 배열을 변경하지 않고 새로운 배열을 만들어 백트래킹 과정에서 각 경로별로 독립적인 선택 상태를 유지하기 위함입니다.

                // 왜 i+1 인가?
                // i+1을 다음 시작점으로 설정하는 이유는 중복된 숫자를 선택하지 않기 위해서입니다.
                // 예를 들어, 이미 숫자 2를 선택했다면 다음에는 3부터 시작하여 2를 다시 선택하지 않도록 합니다.
            }
        }
    }

    backtrack(0, [], 1); // 초기값 설정 및 백트래킹 시작

    return result; // 조합 결과 반환
}

console.log(solution(2));
console.log(solution(5));