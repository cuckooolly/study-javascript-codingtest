// 내가 짠 코드: 시간 초과로 실패
function solution(A, B) {
    let right_answer = Infinity;
    let left_answer = Infinity;

    // 두 문자열이 같으면 0을 반환
    if (A === B) {
        return 0;
    }

    // 오른쪽으로 밀기
    for (let i=0; i<A.length; i++){
        // 문자열의 순서를 바꾸는 로직
        let char_A = A.split('');
        let pop_A = char_A.pop() // 가장 뒤의 문자를 빼고
        char_A.splice(0,0,pop_A); // 가장 앞으로 삽입

        A = char_A.join('');
        if (A == B) {
            right_answer = i+1;
            continue;
        }
    }

    // 왼쪽으로 밀기
    for (let i=0; i<A.length; i++){
        let char_A = A.split('');
        let pop_A = char_A.splice(0, 1, char_A[0])[0]; // 가장 앞의 문자를 빼고
        char_A.push(pop_A); // 가장 뒤로 삽입

        A = char_A.join('');
        if (A == B) {
            console.log(A,B);
            left_answer = i+1;
            continue;
        }
    }

    // 더 적은쪽의 이동횟수가 반환되도록 설정
    if (right_answer < left_answer) {
        return right_answer;
    } else if (right_answer > left_answer) {
        return left_answer;
    } else if (right_answer == left_answer && right_answer != Infinity && left_answer != Infinity) {
        return right_answer;
    }

    // 모든 경우에도 포함되지 않은 경우
    return -1;
}

// GPT가 짠 코드
/**
 * A를 “오른쪽으로만” 밀어서 B를 만들 수 있는 최소 횟수를 반환합니다.
 *  - 오른쪽으로 한 칸 민다는 것은: 마지막 문자를 빼서 맨 앞에 붙이는 연산입니다.
 *  - 만들 수 없으면 -1을 반환합니다.
 *
 * 핵심 원리(중요):
 *  1) A를 두 번 이어붙인 AA = A + A 를 생각하면,
 *     A를 "왼쪽으로 idx칸" 민 결과는 AA의 부분문자열 AA[idx .. idx+n-1]와 정확히 일치합니다.
 *     (길이 n, 시작 idx)
 *  2) “오른쪽 회전 k회” == “왼쪽 회전 (n - k)회” 이므로,
 *     B가 AA의 위치 idx에서 발견되면, 그 위치는 “왼쪽 idx회”에 해당하고
 *     A를 B로 만드는 “오른쪽 회전 횟수 k = (n - idx) % n” 입니다.
 *  3) 문자열이 주기적이면 B가 AA에 여러 위치에서 나타날 수 있습니다.
 *     각 위치마다 k가 달라지므로 **모든 발생 위치**를 검사하여 k의 최솟값을 취해야
 *     “오른쪽만” 미는 최소 횟수가 됩니다.
 *
 * 올바른 종료 조건:
 *  - 탐색 시작 위치가 n 이상인 (idx >= n) 발생은
 *    0..n-1 구간에서 이미 고려한 회전과 “동치”이므로 더 볼 필요가 없습니다.
 *    (AA는 길이 2n. 시작점이 n 이상이면 회전 한 바퀴를 넘긴 시작점입니다.)
 *
 * 시간/공간 복잡도:
 *  - AA 생성 O(n), 부분문자열 탐색(indexOf, fromIndex 활용) 전체 O(n) 수준
 *  - 총 시간복잡도 O(n), 추가 공간 O(n)
 *
 * 예:
 *  - A="hello", B="ohell"
 *      AA="hellohello", "ohell"은 idx=4에서 발견 → k=(5-4)%5=1
 *  - A="atat", B="tata"
 *      AA="atatatat", "tata"는 idx=1,3에서 발견
 *      k=(4-1)%4=3, (4-3)%4=1 → 최소 1 (오른쪽 1회가 정답)
 *  - A="abcd", B="bcda"
 *      idx=1 → k=(4-1)%4=3 → 오른쪽 3회
 */
function solution(A, B) {
  const n = A.length;

  // 1) 길이가 다르면 어떤 회전으로도 같아질 수 없습니다.
  if (n !== B.length) return -1;

  // 2) 이미 동일하면 회전할 필요가 없습니다.
  if (A === B) return 0;

  // 3) A의 모든 '왼쪽 회전 결과'가 길이 n의 연속 부분문자열로 포함된 슈퍼 문자열
  const AA = A + A;

  // 4) 찾은 해들 가운데 최소 오른쪽 회전 횟수 k를 유지 (아직 못 찾으면 Infinity)
  let ans = Infinity;

  // 5) indexOf에서 사용할 fromIndex. 겹치는 발생도 모두 확인하기 위해 +1씩 전진
  let start = 0;

  // 6) B가 AA에 등장하는 모든 시작 위치 idx(단, 0 <= idx < n만 유효)를 순회
  while (true) {
    const idx = AA.indexOf(B, start);

    // (a) 더 이상 발견 못함 → 종료
    // (b) idx가 n 이상이면 한 바퀴(길이 n)를 넘긴 시작점이라 0..n-1에서의 경우와 중복 → 종료
    if (idx === -1 || idx >= n) break;

    // 7) 오른쪽 회전 횟수 k 계산
    //    - B가 "왼쪽 idx회" 결과이므로, 오른쪽으로는 (n - idx)회면 동일 상태
    //    - idx==0이면 k==0이지만, A===B인 경우는 이미 위에서 0을 반환했으므로 여기서는 보통 idx>0
    const k = (n - idx) % n;

    // 8) 최소값 갱신
    if (k < ans) ans = k;

    // 9) 다음 발생 위치도 확인 (겹침 허용을 위해 idx+1부터 재탐색)
    start = idx + 1;
  }

  // 10) 한 번도 갱신되지 않았다면 어떤 오른쪽 회전으로도 B를 만들 수 없음
  return ans === Infinity ? -1 : ans;
}

// 다른 사람이 푼 코드
let solution=(a,b)=>(b+b).indexOf(a)

// 코멘트: (웹 개발에서 쓰는 방식)
// 대단하네요. 이게 사실 현실에서 많이 쓰이는 방식이네요.
// icon을 한 파일 안에 모아놓고 left, top, width, height만 css에서 줘서 한 icon만 보여주게 하거나,
// 슬라이딩 방식의 광고에서 2개를 연결해서 지나가게 하면 마지막 뒤의 첫번째가 자연스럽게 오는 예들이 생각 나네요.

// 인터넷 강의도 있습니다: https://www.youtube.com/watch?v=HwpF73JJC8s&list=PLkfUwwo13dlWZxOdbvMhkzhAowaiEjuGS&index=29
