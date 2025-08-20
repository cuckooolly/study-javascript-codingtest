# 4주차 코딩테스트 연습 회고

1. 어려웠던 문제
    - A로 B 만들기: 배열을 비교하는 방법을 몰라서, 검색을 진행했습니다.
    - 한 번만 등장한 문자: 문자열에서 특정 문자를 제거하는 방법을 알지 못해, 문제를 해결하지 못했습니다.
    - 숨어있는 숫자의 덧셈 (2): 정규표현식의 메소드가 기억이 나지 않아서, 검색을 진행하였습니다.
    - 진료 순서 정하기: 배열을 정렬한 뒤 인덱스만 찾으면 되는데, 그 방법을 떠올리지 못해서 검색을 통해 문제해결하였습니다.
   - 가까운 수: 차이 값이 같을 때의 처리를 잘 하지 못해, GPT를 이용해 일부분을 풀었습니다.
         
2. 새롭게 알게 된 점
   - Array.every() : 배열의 모든 요소가 주어진 판별 함수를 통과하는지 테스트하는 함수
   ```jsx
   // 예시) 두 배열이 동일한지 확인하는 코드
   before_sorted.every((ch, i) => ch == after_sorted[i]) ? 1 : 0;
   ```
   - 정규표현식 (이미 나왔지만, 리마인드 차원에서...)
     - 대표적인 메서드
       - String.match(정규표현식)
       - String.replace(정규표현식, 대체 문자열)
     - 대표적인 표현식
       - /\d+/g : 숫자형 판별
       - /\D/g : 문자 판별
       - /[a-zA-Z]+/g : 영문자 판별
       - /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g : 한글 판별
    
3. 궁금한 점
    - 없습니다.
4. 풀면서 느낀 점
    - 생각보다 시간이 많이 걸리네요...
5. 문제 풀이 인증
```jsx
// 모스부호 (1)

// 풀이 과정 1.
function solution(letter) {
    var answer = '';

    morse = {
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }

    for (chr of letter) {
        answer += morse[chr];
    }

    return answer;
}


// 풀이 과정 2.

function solution(letter) {
    var answer = '';
    morse = {
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    answer = letter.split(" ").map((chr) => morse[chr]).join('');

    return answer;
}


// 2차원으로 만들기

function solution(num_list, n) {
    var answer = [];
    let index = 0;
    let row_length = num_list.length / n;

    for (let row=0; row<row_length; row++) {
        const temp = []
        for (let col=0; col<n; col++) {
            temp.push(num_list[index]);
            index++;
        }
        answer.push(temp)
    }

    return answer;
}

// A로 B 만들기

function solution(before, after) {
    const before_sorted = before.split("").sort();
    const after_sorted = after.split("").sort();

    return before_sorted.every((ch, i) => ch == after_sorted[i]) ? 1 : 0;
}

// k의 개수

function solution(i, j, k) {
    var answer = 0;

    for (let idx=i; idx<=j; idx++) {
        idx = String(idx);
        for (idx_sub of idx){
            if (idx_sub.includes(k)) {
                answer += 1;
            }
        }
    }

    return answer;
}

// 한 번만 등장한 문자

// 미 해결 문제
function solution(s) {
    var answer = new String();
    answer = answer.split("");

    for (chr of s) {
        if (answer.includes(chr)) {
            answer = answer.filter(c => c != chr);
        } else {
            answer.push(chr);
        }
    }

    answer = answer.sort().join("");
    return answer;
}

// GPT가 작성한 코드
function solution(s) {
  return [...s]
    .filter(ch => s.indexOf(ch) === s.lastIndexOf(ch))
    .sort()
    .join('');
}

// 숨어있는 숫자의 덧셈 (2)

function solution(my_string) {
    var answer = 0;
    const nums = my_string.match(/\d+/g) || [];
    nums.map(element => answer += Number(element));
    return answer;
}

// 진료순서 정하기
// GPT가 작성한 코드
function solution(emergency) {
    const sorted = [...emergency].sort((a,b) => b-a);
    return emergency.map(e=> sorted.indexOf(e) + 1);;
}

// 팩토리얼

function solution(n) {
    var answer = 0;
    let temp = 1;

    for (let i=1; i<=10; i++) {
        temp = temp * i;
        if (temp > n) {
            return i-1;
        } else if (temp == n) {
            return i;
        }
    }

    return answer;
}

// 가까운 수

function solution(array, n) {
    var answer = 0;
    let min_diff = Infinity;

    for (arr of array) {
        const temp_diff = Math.abs(n - arr);
        if (temp_diff < min_diff || (temp_diff === min_diff && arr < answer)) {
            min_diff = temp_diff;
            answer = arr;
        }
    }
    return answer;
}

// 7의 개수

function solution(array) {
    var answer = 0;

    for (arr of array) {
        arr = new String(arr);
        if (arr.includes("7")) {
            for (a of arr){
                if (a.includes("7")){
                    answer += 1;
                }
            }
        }
    }
    return answer;
}

```
