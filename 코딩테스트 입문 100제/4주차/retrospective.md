# 4주차 코딩테스트 연습 회고

1. 어려웠던 문제
    - A로 B 만들기: 배열을 비교하는 방법을 몰라서, 검색을 진행했습니다.
    - 한 번만 등장한 문자: 문자열에서 특정 문자를 제거하는 방법을 알지 못해, 문제를 해결하지 못했습니다.
    - 숨어있는 숫자의 덧셈 (2): 정규표현식의 메소드가 기억이 나지 않아서, 검색을 진행하였습니다.
        ```jsx
        function solution(s) {
          return [...s]
            .filter(ch => s.indexOf(ch) === s.lastIndexOf(ch))
            .sort()
            .join('');
        }
        ```
    - 진료 순서 정하기: 배열을 정렬한 뒤 인덱스만 찾으면 되는데, 그 방법을 떠올리지 못해서 검색을 통해 문제해결하였습니다.
         ```jsx
         function solution(emergency) {
            const sorted = [...emergency].sort((a,b) => b-a);
            return emergency.map(e=> sorted.indexOf(e) + 1);;
          }
         ```
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
![](/img/img.png)
