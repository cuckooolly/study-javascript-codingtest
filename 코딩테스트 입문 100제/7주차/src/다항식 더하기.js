function solution(polynomial) {
  // 문제 조건상 덧셈만 있으므로 ' + ' 기준으로 토큰화
  const tokens = polynomial.split(' + ');
  let ax = 0; // x의 계수 합
  let b  = 0; // 상수항 합

  for (const t of tokens) {
    if (t === 'x') {
      ax += 1;
    } else if (t.endsWith('x')) {
      ax += parseInt(t.slice(0, -1), 10); // '3x' -> 3 누적
    } else {
      b += parseInt(t, 10);               // 상수 누적
    }
  }

  // 출력 문자열 구성: 같은 식이면 가장 짧게
  const parts = [];
  if (ax) parts.push(ax === 1 ? 'x' : `${ax}x`); // 1x -> x
  if (b)  parts.push(String(b));
  return parts.length ? parts.join(' + ') : '0';
}
