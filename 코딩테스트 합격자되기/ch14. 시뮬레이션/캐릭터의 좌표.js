/**
 * 문제: 캐릭터의 좌표
 *
 * 2차원 평면 위에서 캐릭터가 상하좌우로 이동할 때,
 * 주어진 보드의 경계를 벗어나지 않는 범위 내에서
 * 최종 위치를 구하는 문제
 *
 * - 초기 위치: (0, 0)
 * - 좌표계: 중앙이 (0, 0), 오른쪽이 +x, 위쪽이 +y
 * - 보드 크기: [width, height]
 * - 이동 가능 범위: x는 [-width/2, width/2], y는 [-height/2, height/2]
 *
 * 예시: board가 [7, 9]인 경우
 * - x 범위: -3 ~ 3 (총 7칸)
 * - y 범위: -4 ~ 4 (총 9칸)
 */

// ==================== 방법 1: 객체 사용 버전 ====================
/**
 * 객체를 활용한 방향 이동 처리
 * 장점: 코드가 간결하고 확장성이 좋음 (새로운 방향 추가 용이)
 *
 * @param {string[]} keyInput - 이동 명령 배열 ["up", "down", "left", "right"]
 * @param {number[]} board - 보드 크기 [가로, 세로]
 * @returns {number[]} - 최종 좌표 [x, y]
 */
function solution(keyInput, board) {
    // 캐릭터의 현재 좌표 (초기값: 원점)
    let x = 0; // x 좌표: 좌우 위치 (왼쪽: -, 오른쪽: +)
    let y = 0; // y 좌표: 상하 위치 (아래: -, 위: +)

    // 각 방향키에 대응하는 이동량을 객체로 정의
    // [dx, dy] 형태로 x축 변화량과 y축 변화량을 저장
    const moves = {
        "up": [0, 1],      // 위로 이동: x 변화 없음, y는 +1 증가
        "down": [0, -1],   // 아래로 이동: x 변화 없음, y는 -1 감소
        "left": [-1, 0],   // 왼쪽 이동: x는 -1 감소, y 변화 없음
        "right": [1, 0]    // 오른쪽 이동: x는 +1 증가, y 변화 없음
    }

    // 보드의 반 크기 계산 (경계값 설정)
    // Math.floor를 사용하여 정수로 내림 (예: 7 / 2 = 3.5 → 3)
    const halfWidth = Math.floor(board[0] / 2);   // x축 이동 가능 범위: -halfWidth ~ +halfWidth
    const halfHeight = Math.floor(board[1] / 2);  // y축 이동 가능 범위: -halfHeight ~ +halfHeight

    // 각 키 입력에 대해 순차적으로 처리
    for (let key of keyInput) {
        // 현재 키에 해당하는 이동량을 가져옴
        // 배열 구조 분해를 사용하여 dx, dy 추출
        const [dx, dy] = moves[key];

        // 이동 후의 새로운 좌표 계산
        const newX = x + dx;
        const newY = y + dy;

        // x축 경계 검사
        // 새로운 x 좌표가 보드 범위 내에 있는지 확인
        // 범위: -halfWidth ≤ newX ≤ halfWidth
        if (newX >= -halfWidth && newX <= halfWidth) {
            x = newX; // 범위 내라면 이동 적용
        }
        // 범위를 벗어나면 이동하지 않음 (현재 위치 유지)

        // y축 경계 검사
        // 새로운 y 좌표가 보드 범위 내에 있는지 확인
        // 범위: -halfHeight ≤ newY ≤ halfHeight
        if (newY >= -halfHeight && newY <= halfHeight) {
            y = newY; // 범위 내라면 이동 적용
        }
        // 범위를 벗어나면 이동하지 않음 (현재 위치 유지)
    }

    // 최종 좌표를 배열로 반환
    return [x, y];
}

// 테스트: "down"을 5번 입력, 보드 크기는 7x9
// 예상 결과: [0, -4] (아래쪽 경계까지만 이동)
console.log(solution(["down","down","down","down","down"], [7,9]));

// ==================== 방법 2: switch문 사용 버전 ====================
/**
 * switch-case문을 활용한 방향 이동 처리
 * 장점: 조건과 동작이 명시적이며, 각 케이스별 추가 로직 작성이 용이
 *
 * @param {string[]} keyInput - 이동 명령 배열
 * @param {number[]} board - 보드 크기 [가로, 세로]
 * @returns {number[]} - 최종 좌표 [x, y]
 */
function solution2(keyInput, board) {
    // 캐릭터의 현재 좌표 초기화
    let x = 0; // x 좌표 (좌우)
    let y = 0; // y 좌표 (상하)

    // 보드의 반 크기 계산 (이동 가능한 최대 거리)
    const width = Math.floor(board[0] / 2);   // x축 경계: -width ~ +width
    const height = Math.floor(board[1] / 2);  // y축 경계: -height ~ +height

    // 모든 키 입력을 순서대로 처리
    for (let key of keyInput) {
        // 각 키 입력에 따라 분기 처리
        switch(key) {
            case "up":
                // 위로 이동: y 좌표 증가 (위쪽 방향이 양수)
                // 상단 경계 검사: y < height인 경우에만 이동
                if (y < height) y += 1;
                break; // switch문 종료

            case 'down':
                // 아래로 이동: y 좌표 감소 (아래쪽 방향이 음수)
                // 하단 경계 검사: y > -height인 경우에만 이동
                if (y > -height) y -= 1;
                break;

            case 'right':
                // 오른쪽 이동: x 좌표 증가 (오른쪽 방향이 양수)
                // 우측 경계 검사: x < width인 경우에만 이동
                if (x < width) x += 1;
                break;

            case 'left':
                // 왼쪽 이동: x 좌표 감소 (왼쪽 방향이 음수)
                // 좌측 경계 검사: x > -width인 경우에만 이동
                if (x > -width) x -= 1;
                break;

            // default 케이스는 생략 (유효하지 않은 입력은 무시)
        }
    }

    // 모든 이동을 처리한 후 최종 좌표 반환
    return [x, y];
}

// 테스트: "down"을 5번 입력, 보드 크기는 7x9
// 보드 크기가 7x9이므로 y의 범위는 -4 ~ 4
// down 5번 → y: 0 → -1 → -2 → -3 → -4 → -4 (경계에 도달하여 더 이상 이동 불가)
// 예상 결과: [0, -4]
console.log(solution2(["down","down","down","down","down"], [7,9]));

/**
 * 두 방법의 비교:
 *
 * 1. 객체 사용 버전 (solution):
 *    - 장점: 코드가 간결하고 데이터 주도적
 *    - 장점: 새로운 방향 추가 시 moves 객체만 수정
 *    - 단점: 각 방향별로 다른 로직을 추가하기 어려움
 *
 * 2. switch문 사용 버전 (solution2):
 *    - 장점: 각 케이스별로 독립적인 로직 작성 가능
 *    - 장점: 조건이 명시적이어서 가독성 좋음
 *    - 단점: 코드가 상대적으로 길어짐
 *
 * 시간 복잡도: O(n) - n은 keyInput의 길이
 * 공간 복잡도: O(1) - 고정된 크기의 변수만 사용
 */
