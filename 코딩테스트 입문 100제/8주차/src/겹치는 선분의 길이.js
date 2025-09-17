// 문제 설명
// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때,
// 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// 내가 푼 코드 (라고 하기엔, 힌트를 얻고 문제 해결방안도 GPT에게 구한 코드)
function solution(lines) {
    var answer = 0;
    const countLine = new Array(200).fill(0);

    // 겹치는 라인의 갯수를 셈
    for (l of lines){
        for (let i=l[0]; i<l[1]; i++){
            countLine[i+100] += 1; // +100을 하여, 음수 값에도 대응을 함
        }
    }

    // 세어진 수 중에서, 겹치는 구간의 수를 구함
    for (c of countLine){
        if (c >= 2){
            answer += 1;
        }
    }

    return answer;
}

// 다른 사람이 푼 풀이 (극한의 최적화)
function solution(lines) {
  // 선분들이 놓인 1차원 좌표(-100 ~ 100)를
  // 정수 단위 구간 [-100, -99), ..., [99, 100)으로 쪼개 카운트하기 위한 배열
  // 인덱스 0 ~ 199 ↔ 구간 [-100, 99]의 [i, i+1) 에 매핑 (OFFSET = 100)
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    // 각 선분 [a, b) 가 덮는 모든 단위 구간을 1씩 증가
    // 반열린 구간 [a, b) 로 처리하므로, 끝점만 맞닿는 경우는 길이 0으로 간주됨
    // 음수 좌표는 OFFSET(+100)으로 양의 인덱스로 변환
    for (; a < b; a++) line[a + 100]++;
  });

  // 덮인 개수가 2 이상(> 1)인 단위 구간의 수가 곧 겹친 길이
  return line.reduce((acc, cnt) => (cnt > 1 ? acc + 1 : acc), 0);
}