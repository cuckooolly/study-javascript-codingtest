// 퀸이 서로 공격할 수 없는 위치에 놓이는 경우의 수를 구하는 함수
function search(n, y, width, diagonal1, diagonal2) {
    let answer = 0;
    // 모든 행에 대해서 퀸의 위치가 결정되었을 경우
    if (n === y) {
        // 해결 가능한 경우의 수를 1 증가
        answer += 1;
    } else {
        // 현재 행(y)에서 퀸을 놓을 수 있는 열(i)을 찾음
        for (let i = 0; i < n; i++) {
            // 해당 열(i)이나 대각선에 이미 퀸이 놓여있는 경우 건너뜀
            if (width[i] || diagonal1[y + i] || diagonal2[i - y + n]) {
                continue;
            }
            // 해당 위치에 퀸을 놓음
            width[i] = diagonal1[i + y] = diagonal2[i - y + n] = true;
            // 다음 행으로 이동하여 재귀적으로 해결 가능한 경우의 수 찾기
            answer += search(n, y + 1, width, diagonal1, diagonal2);
            // 해당 위치에 놓인 퀸을 제거함
            width[i] = diagonal1[i + y] = diagonal2[i - y + n] = false;
        }
    }
    // 왜 diagonal1의 인덱스가 i + y 인가?
    // 대각선1은 우하향 대각선을 나타내며, 이 대각선의 인덱스는 (행 + 열)으로 계산됩니다.
    // 따라서 i(열)와 y(행)를 더한 값이 대각선1의 인덱스가 됩니다.

    // 왜 diagonal2의 인덱스가 i - y + n 인가?
    // 대각선2는 좌하향 대각선을 나타내며, 이 대각선의 인덱스는 (열 - 행 + n)으로 계산됩니다.
    // 이렇게 하는 이유는 음수 인덱스를 방지하고, 모든 대각선을 양수 인덱스로 표현하기 위함입니다.

    // 왜 상향 대각선은 없는가?
    // 상향 대각선(좌상향 대각선)은 대각선1과 대각선2로 이미 커버되고 있습니다.
    // 대각선1은 우하향 대각선을 나타내고, 대각선2는 좌하향 대각선을 나타내므로,
    // 상향 대각선은 별도로 추적할 필요가 없습니다.
    return answer;
}

function solution(n) {
    // 가로줄, 대각선1, 대각선2에 퀸이 놓여있는지 여부를 저장하는 배열 초기화 및 Search 함수 호출하여 해결 가능한 경우의 수 구하기
    const answer = search(n, 0, Array(n).fill(false), Array(2 * n).fill(false), Array(2 * n).fill(false));
    return answer;
}

console.log(solution(4));