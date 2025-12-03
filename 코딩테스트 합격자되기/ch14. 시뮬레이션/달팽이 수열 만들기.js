/**
 * 달팽이 수열 만들기
 * n x n 크기의 2차원 배열에 시계방향 나선형으로 1부터 n²까지의 숫자를 채우는 함수
 *
 * 예시: n=3일 때
 * [1, 2, 3]
 * [8, 9, 4]
 * [7, 6, 5]
 *
 * @param {number} n - 배열의 크기 (n x n)
 * @returns {number[][]} - 달팽이 수열이 채워진 2차원 배열
 */
function solution(n){
    // n x n 크기의 2차원 배열을 생성하고 모든 요소를 0으로 초기화
    // Array.from을 사용하여 각 행마다 독립적인 배열을 생성
    const snailArray = Array.from({length: n}, () => Array.from({length: n}, () => 0));

    // 배열에 채울 현재 숫자 (1부터 시작하여 n²까지 증가)
    let num = 1;

    // 현재 채워야 할 영역의 경계를 나타내는 인덱스
    // startRow: 현재 채울 영역의 위쪽 행 인덱스
    // endRow: 현재 채울 영역의 아래쪽 행 인덱스
    let startRow = 0, endRow = n - 1;

    // startCol: 현재 채울 영역의 왼쪽 열 인덱스
    // endCol: 현재 채울 영역의 오른쪽 열 인덱스
    let startCol = 0, endCol = n - 1;

    // 채울 영역이 남아있는 동안 반복
    // 모든 영역을 채우면 startRow > endRow 또는 startCol > endCol이 되어 종료
    while(startRow <= endRow && startCol <= endCol){

        // [1단계] 현재 영역의 맨 위 행을 왼쪽에서 오른쪽으로 채우기
        // 예: (0,0) → (0,1) → (0,2)
        for (let i = startCol; i <= endCol; i++) {
            snailArray[startRow][i] = num++;
        }
        startRow++; // 위쪽 행을 다 채웠으므로 다음 행으로 이동

        // [2단계] 현재 영역의 맨 오른쪽 열을 위에서 아래로 채우기
        // 예: (1,2) → (2,2)
        for (let i = startRow; i <= endRow; i++) {
            snailArray[i][endCol] = num++;
        }
        endCol--; // 오른쪽 열을 다 채웠으므로 왼쪽으로 한 칸 이동

        // [3단계] 현재 영역의 맨 아래 행을 오른쪽에서 왼쪽으로 채우기
        // 예: (2,1) → (2,0)
        // startRow <= endRow 조건: 채울 행이 남아있는지 확인 (홀수 크기 배열 대비)
        if(startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                snailArray[endRow][i] = num++;
            }
            endRow--; // 아래쪽 행을 다 채웠으므로 위로 한 칸 이동
        }

        // [4단계] 현재 영역의 맨 왼쪽 열을 아래에서 위로 채우기
        // 예: (1,0)
        // startCol <= endCol 조건: 채울 열이 남아있는지 확인 (홀수 크기 배열 대비)
        if(startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                snailArray[i][startCol] = num++;
            }
            startCol++; // 왼쪽 열을 다 채웠으므로 오른쪽으로 한 칸 이동
        }

        // 한 바퀴(테두리)를 완성했으므로 다음 내부 영역으로 이동하여 반복
    }

    // 완성된 달팽이 수열 배열 반환
    return snailArray;
}

// 테스트: 3x3 달팽이 수열 출력
console.log(solution(3));