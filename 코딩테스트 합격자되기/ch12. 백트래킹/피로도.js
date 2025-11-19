function backtrack(currnetK, cnt, dungeons, visited) {
    let answerMax = cnt;
    for (let i = 0; i < dungeons.length; i++) {
        // 현재 피로도(currnetK)가 최소 필요 피로도(dungeons[i][0]) 이상이고 방문하지 않은 던전인 경우
        if (currnetK >= dungeons[i][0] && visited[i] === 0) {
            visited[i] = 1; // 방문한 던전은 1로 표시
            // 현재까지의 최대 탐험 가능 던전 수와 i번째 던전에서 이동할 수 있는 최대 탐험 가능 던전 수 중 큰 값을 선택하여 업데이트
            answerMax = Math.max(answerMax, backtrack(currnetK - dungeons[i][1], cnt + 1, dungeons, visited));
            visited[i] = 0; // 백트래킹을 위해 방문 여부 초기화 -> 가능한 모든 경우의 수를 탐색하기 위함
            /*
            * 백트래킹은 모든 가능한 경로를 탐색하기 위해 다음 과정을 반복합니다:
            * 1. 선택하기 (던전 방문)
            * 2. 탐색하기 (재귀 호출)
            * 3. 선택 취소하기 (방문 여부 초기화) ← 여기가 핵심!
            *
            *   // 던전 0번을 먼저 방문하는 경우
            *   visited[0] = 1  // 0번 방문
            *   visited[1] = 1  // 그 다음 1번 방문
            *   visited[2] = 1  // 그 다음 2번 방문
            *   visited[2] = 0  // ← 초기화! (2번을 다른 순서로도 방문해봐야 함)
            *   visited[1] = 0  // ← 초기화! (1번 대신 2번을 먼저 갈 수도 있음)
            *
            *   visited[2] = 1  // 이번엔 0 → 2 순서
            *   visited[1] = 1
            *   visited[1] = 0
            *   visited[2] = 0
            *   visited[0] = 0  // ← 초기화! (이제 1번이나 2번을 먼저 방문하는 경우도 탐색)
             */
        }
    }

    return answerMax;
}

// k: 현재 피로도, dungeons: 던전 정보 배열
// 던전 정보 배열의 각 요소는 [최소 필요 피로도, 소모 피로도] 형태
// 방문하지 않은 던전은 0, 방문한 던전은 1로 표시
function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(0); // 방문 여부를 저장하는 배열 초기화
    const answerMax = backtrack(k, 0, dungeons, visited); // 백트래킹 함수 호출
    return answerMax;
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));