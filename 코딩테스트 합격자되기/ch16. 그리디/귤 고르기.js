/*
문제: 귤 고르기
경화는 과수원에서 귤을 수확했습니다. 경화는 수확한 귤 중 'k'개를 골라 상자 하나에 담아 판매하려고 합니다.
그런데 수확한 귤의 크기가 일정하지 않아 보기 싫은 것을 방지하기 위해
귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하려고 합니다.

예를 들어, 경화가 수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3]이고
6개의 귤을 판매하고 싶다면, 크기가 2인 귤 2개, 3인 귤 2개, 5인 귤 2개를 선택하면
서로 다른 종류가 3개가 되어 최소가 됩니다.

경화가 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어집니다.
경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

제한 사항:
- 1 ≤ k ≤ tangerine의 길이 ≤ 100,000
- 1 ≤ tangerine의 원소 ≤ 10,000,000

입출력 예:
k = 6, tangerine = [1, 3, 2, 5, 4, 5, 2, 3]  → result = 3
k = 4, tangerine = [1, 3, 2, 5, 4, 5, 2, 3]  → result = 2
k = 2, tangerine = [1, 1, 1, 1, 2, 2, 2, 3]  → result = 1

해결 방법: 그리디 알고리즘 (Greedy Algorithm) - 빈도수 기반 선택
- 각 크기별로 귤의 개수를 카운팅
- 개수가 많은 크기부터 선택하면 종류의 수를 최소화할 수 있음
- 빈도수를 내림차순으로 정렬하여 많은 것부터 k개가 될 때까지 선택
*/

function solution(k, tangerine) {
    // 각 귤 크기별로 개수를 카운팅하는 객체
    // key: 귤의 크기, value: 해당 크기의 귤 개수
    const counter = {};

    // tangerine 배열을 순회하면서 각 크기별 귤의 개수를 카운팅
    for (const t of tangerine) {
        // counter[t]가 존재하면 1 증가, 없으면 0에서 시작하여 1 증가
        counter[t] = (counter[t] || 0) + 1;
    }

    // counter 객체의 값(개수)들만 추출하여 내림차순으로 정렬
    // 개수가 많은 크기부터 선택하기 위함 (그리디 전략)
    // 예: counter = {1:1, 2:2, 3:2, 4:1, 5:2} → sortedCounts = [2, 2, 2, 1, 1]
    const sortedCounts = Object.values(counter).sort((a, b) => b - a);

    // 선택한 귤의 종류(크기의 종류) 개수를 저장하는 변수
    let numTypes = 0;

    // 현재까지 선택한 귤의 총 개수를 저장하는 변수
    let countSum = 0;

    // 정렬된 개수 배열을 순회하면서 k개가 될 때까지 귤 선택
    for (const count of sortedCounts) {
        // 현재 크기의 귤을 모두 선택 (개수가 많은 것부터 선택)
        countSum += count;

        // 하나의 크기(종류)를 선택했으므로 종류 개수 증가
        numTypes += 1;

        // 선택한 귤의 개수가 k개 이상이 되면 종료
        // k개를 초과해도 괜찮음 (같은 크기는 모두 선택해야 하므로)
        if (countSum >= k) {
            break;
        }
    }

    // 최소 종류의 개수 반환
    return numTypes;
}

// 시간 복잡도: O(n log n) - 카운팅에 O(n), 정렬에 O(m log m) where m은 서로 다른 크기의 개수
// 공간 복잡도: O(m) - counter 객체와 sortedCounts 배열 (m은 서로 다른 크기의 개수)

// 테스트
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3