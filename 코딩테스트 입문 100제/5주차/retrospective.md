# 5주차 코딩테스트 연습 회고

1. 어려웠던 문제
    - 그나마 풀었던 문제
      - 컨트롤 제트
        - 배열의 특정 원소를 제거하는 방법이 기억나지 않아, 구글링을 통해 해결했습니다.
        - ParseInt() 메서드도 생각나지 않아, 구글링을 통해 떠올렸습니다.
      - 구슬을 나누는 경우의 수
        - 팩토리얼을 직접 구했는데, 30!이 넘어가면 Number의 범위를 초과하여 Infinity가 되는 문제가 있었습니다.
        - GPT의 도움을 받아, 누적합을 구하는 방식으로 문제를 해결하였습니다.
      - 문자열 계산하기
        - 이항 연산까지는 성공하였는데, 삼항 이상의 연산은 계산하지 못했습니다.
        - GPT의 도움을 받아, 연산자만 찾아 계산하는 방식으로 문제를 해결하였습니다.
      - 공 던지기
        - 구현을 다 하였는데, 순회 횟수를 K+1로 잘못 계산하여 틀렸습니다.
        - GPT의 도움을 받아, 순회 횟수를 K-1로 수정하여 문제를 해결하였습니다.
    - 아예 풀지 못한 문제
      - 소인수 분해: GPT가 문제를 풀었습니다.
      - 이진수 더하기: 스스로 문제 풀이를 하였습니다.
      - 영어가 싫어요: GPT가 문제를 풀었습니다.
      - 삼각형의 완성조건 (2): GPT가 문제를 풀었습니다.
2. 새롭게 알게 된 점
    
    ```jsx
    // Array.splice() 메서드
    // 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의
    Array.splice(시작 인덱스, 삭제/대체할 요소의 갯수, 대체할 요소...);
    ```
    
3. 궁금한 점
    - factorial을 재귀함수로 구현하는 방법이, 생각은 나는데 구현이 되지 않습니다.
      - 많이 연습해봐야 할 것 같습니다.
4. 풀면서 느낀 점
    - Javascript의 Number 타입의 범위가 생각보다 작다는 것을 느끼게 되었습니다.
    - 좋은 코드를 많이 봐야, 좋은 코드를 작성할 수 있을 것 같단 생각이 들었습니다.
    - GPT에 너무 의존하는 것 같아, 스스로 문제를 해결하는 연습을 더 해야겠다는 생각이 들었습니다.

5. 문제 풀이 인증

```jsx
// 컨트롤 제트
function solution(s) {
    var answer = 0;

    const arr = s.split(" ");

    // Z와 그 이전 숫자를 제거하는 코드
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == "Z"){
            arr.splice(i-1, 1); // Z 앞의 숫자를 제거
        }
    }

    // 나온 숫자를 더하는 코드
    for (a of arr) {
        if (a == "Z"){ // Z가 나온 경우에는 넘기기
            continue;
        } else {
            answer += parseInt(a);
        }
    }

    return answer;
}

// 다른 사람의 풀이: Stack을 이용한 풀이
function solution(s) {
    const stack = []

    s.split(' ').forEach((target) => {
        if(target === 'Z') stack.pop();
        else stack.push(+target)
    })

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
```

```jsx
// 잘라서 배열로 저장하기
function solution(my_str, n) {
    var answer = [];

    for (let i=0; i<my_str.length; i+=n){
        answer.push(my_str.slice(i,i+n));
    }

    return answer;
}

// 다른 사람의 풀이
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
```

```javascript
// 문자열 계산하기
// 내 풀이: 이항 연산은 계산하나, 삼항 이상의 연산은 계산하지 못함
function solution(my_string) {
    let answer = 0;

    const my_arr = my_string.split(" ");
    console.log(my_arr);

    for (let i=0; i<my_arr.length; i++){
        if (parseInt(my_arr[i])){
            continue;
        } else {
            switch (my_arr[i]) {
                case "+":
                    answer = parseInt(my_arr[i-1]) + parseInt(my_arr[i+1]);
                    break;
                case "-":
                    answer = my_arr[i-1] - my_arr[i+1];
                    break;
            }
        }
    }
    return answer;
}

// GPT의 문제 풓이
function solution(my_string) {
  const arr = my_string.split(' ');
  let answer = Number(arr[0]);           // ① 첫 숫자로 초기화

  for (let i = 1; i < arr.length; i += 2) { // ② 연산자 위치만 순회
    const op = arr[i];
    const val = Number(arr[i + 1]);      // ④ 숫자 변환 일관화
    if (op === '+') {
      answer += val;                     // ③ 누적
    } else {
      answer -= val;                     // ③ 누적
    }
  }
  return answer;                         // 정수 범위 내이므로 Number 그대로 반환
}

```

```javascript
function solution(numbers, k) {
    var answer = 0;
    let length = numbers.length;
    let idx = 0;
    
    for (let i=1; i<k; i++){ // k-1번 이동
        console.log(idx);
        idx += 2;
        if (idx >= length) {
            idx -= length;
        }
    }
    
    return numbers[idx];
}
```

```jsx
// 구슬을 나누는 경우의 수
// 내 풀이
// 문제점: 30!이 넘어가면 Number의 범위를 초과하여 Infinity가 된다.
function facto(n) {
    let answer = 1;
    for (let i=n; i>1; i--){
        answer *= i;
    }
    return answer;
}

function solution(balls, share) {
    var answer = -Infinity;

    answer = facto(balls) / (facto(balls-share) * facto(share));

    return answer;
}

// GPT의 풀이
function facto(n, k) {
    let res = 1;
    for (let i = 1; i <= k; i++) {
        // 매 단계 값이 조합값을 직접 형성 → overflow 없음
        res = res * (n - k + i) / i;
    }
    // 부동소수 오차 방지를 위해 반올림
    return Math.round(res);
}

function solution(balls, share) {
    var answer = -Infinity;
    
    answer = facto(balls, share);
    
    return answer;
}
```

```javascript
// 캐릭터의 좌표
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
```