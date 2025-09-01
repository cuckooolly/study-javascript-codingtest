function solution(score) {
    // 평균 점수 배열 생성
    const avg_arr = score.map(s => (s[0] + s[1]) / 2);

    // 평균 점수 배열을 내림차순 정렬한 새로운 배열 생성
    const sorted_avg = [...avg_arr].sort((a,b) => b - a);

    // 원래 평균 배열을 돌면서 등수 계산
    const answer = avg_arr.map(avg => sorted_avg.indexOf(avg) + 1);

    return answer;
}

// 다른 사람의 풀이
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}
// 예를 들어 첫번째 순회라고 한다면 map의 첫 ele는 [80,70]이 됩니다. filter의 v는 score 배열을 차례로 순회합니다.
// 첫 ele인 [80,70]보다 높은 값이 있으면 배열로 리턴합니다. 80,70보다 높은 값은 없기 때문에 해당 배열은 0개가 리턴됩니다.
// length의 + 1값을 하여 score의 map을 거친 첫번째 리턴값은 1이됩니다.

// 참고: 시간 복잡도가 높다는 의견이 있습니다. 간결하지만, 좋은 코드는 아닌듯 합니다.

// GPT의 풀이: 시간 복잡도 낮은 버전

// 평균 대신 **합계(0~200)**로 비교해도 순위가 동일합니다. (평균은 합계를 2로 나눈 값이므로 단조성 동일)
// 합계의 범위가 작으므로 **빈도 배열(카운팅)**으로 “나보다 큰 합계의 개수”를 O(1)로 조회하도록 전처리합니다.
// 요구하는 순위는 경쟁 랭킹(1 + 자신보다 높은 점수 인원 수) 입니다.

function solution(score) {
  // 1) 각 학생의 합계 계산(평균 대신 합계로 비교)
  const sums = score.map(([a, b]) => a + b); // 0 ~ 200

  // 2) 합계 빈도 카운팅
  const MAX = 200;
  const freq = new Array(MAX + 1).fill(0);
  for (const s of sums) freq[s]++;

  // 3) 높은 합계부터 내려오며 rank 매핑(경쟁 랭킹)
  //    rankOf[s] = (s보다 큰 합계의 누적개수) + 1
  const rankOf = new Array(MAX + 1).fill(0);
  let higherCount = 0;
  for (let s = MAX; s >= 0; s--) {
    if (freq[s] > 0) {
      rankOf[s] = higherCount + 1;
      higherCount += freq[s];
    }
  }

  // 4) 원래 순서대로 랭크 반환
  return sums.map(s => rankOf[s]);
}
