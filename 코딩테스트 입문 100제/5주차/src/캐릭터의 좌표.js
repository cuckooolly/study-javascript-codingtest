function solution(keyinput, board) {
    var answer = [0,0];

    for (input of keyinput) {
        switch (input) {
            case "up":
                // 이동
                answer[1] += 1;
                // 맵의 크기를 벗어나는지 확인
                if (Math.ceil(board[1] / 2) <= Math.abs(answer[1])) {
                    // 벗어나면, 이동한 칸을 취소
                    answer[1] -= 1;
                }
                break;
            case "down":
                answer[1] -= 1;
                if (Math.ceil(board[1] / 2) <= Math.abs(answer[1])) {
                    answer[1] += 1;
                }
                break;
            case "right":
                answer[0] += 1;
                if (Math.ceil(board[0] / 2) <= Math.abs(answer[0])) {
                    answer[0] -= 1;
                }
                break;
            case "left":
                answer[0] -= 1;
                if (Math.ceil(board[0] / 2) <= Math.abs(answer[0])) {
                    answer[0] += 1;
                }
                break;
        }
    }

    return answer;
}

// 다른 사람의 풀이
function solution(keyinput, board) {
    let res = [0,0];
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}