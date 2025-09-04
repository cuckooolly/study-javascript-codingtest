// GPT가 푼 문제
function solution(n) {
  const result = [];
  let divisor = 2;

  while (divisor * divisor <= n) {
    if (n % divisor === 0) {
      result.push(divisor);
      while (n % divisor === 0) {
        n = Math.floor(n / divisor);
      }
    }
    divisor++;
  }

  if (n > 1) {
    result.push(n);
  }

  return result;
}


// 다른 사람 풀이
function solution(n) {
    var answer = [];

    for(let i = 2; i <= n; i++) {

        while (n % i === 0) {

            n = n / i;
            answer.push(i);

        }
    }

    return [...new Set(answer)];
}
