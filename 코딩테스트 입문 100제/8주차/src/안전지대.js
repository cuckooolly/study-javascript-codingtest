// 문제 설명
// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

// GPT가 돕고 내가 퍼먹기만 한 코드
function solution(board) {
    var answer = 0;
    
    const len = board.length;
    let dangerZone = Array.from(Array(len), () => Array(len).fill(0))
    
    // 지뢰가 있는 곳과 인접한 곳을 dangerZone에 표시
    for (let i=0; i<len; i++){
        for (let j=0; j<len; j++){
            if (board[i][j] === 1){ // 여기까지는 지뢰가 있는 곳을 찾는 코드
                for (let x = i-1; x < i+2; x++){
                    for (let y = j-1; y < j+2; y++){ // 조건식에 오타를 내서, 무한루프가 돌아감... (에러를 GPT가 찾아줌)
                        if (x < 0 || x >= len || y < 0 || y >= len) continue; // 여기까지는 지뢰가 인접한 곳을 찾는 코드 (Undefined가 생기는 문제를 GPT가 잡아줌)
                        dangerZone[x][y] = 1; // 지뢰가 있는 곳과 인접한 곳을 1로 표시
                    }
                }
            }
        }
    }
    
    // 안전한 칸의 수를 세어 출력
    for (let i=0; i<len; i++){
        for (let j=0; j<len; j++){
            if (dangerZone[i][j] !== 1){ // 위에서 표시하지 않은 칸의 갯수를 셈
                answer += 1;
            }
        }
    }
    
    return answer;
}

// 다른 사람의 풀이
function solution(board) {

    let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
    let safezone = 0;

    board.forEach((row, y, self) => row.forEach((it, x) => {
        if (it === 1) return false;
        return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
               ? false : safezone++;
    }));

    return safezone;
}