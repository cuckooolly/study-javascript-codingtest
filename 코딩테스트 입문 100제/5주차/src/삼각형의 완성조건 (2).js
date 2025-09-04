// GPT가 푼 문제
function solution(sides) {
  const [a, b] = sides;
  const maxSide = Math.max(a, b);
  const minSide = Math.min(a, b);

  return (a + b - 1) - (maxSide - minSide);
}

// 다른 사람 풀이
function solution(sides) {
    return Math.min(...sides)*2-1
}
