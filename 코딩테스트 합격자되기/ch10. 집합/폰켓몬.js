// 책을 보고 푼, 내 풀이
function solution(nums) {
    let answer;

    // 가질 수 있는 폰켓몬의 수
    const limit = nums.length / 2;
    // 중복을 제거한 폰켓몬의 종류의 수
    const size = new Set(nums).size;

    // 가질 수 있는 폰켓몬의 수와 중복을 제거한 폰켓몬의 종류의 수 중 작은 값이 정답 (왜??)
    answer = Math.min(limit, size);

    return answer;
}

// 다른 사람의 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}