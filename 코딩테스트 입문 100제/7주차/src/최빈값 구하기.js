function solution(array) {
  const freq = new Map();
  let maxCnt = 0;
  let mode = -1;
  let tie = 0; // 최대 빈도값을 가진 서로 다른 값의 개수(최소 1)

  for (const x of array) {
    const c = (freq.get(x) ?? 0) + 1;
    freq.set(x, c);

    if (c > maxCnt) {         // 새로운 최대 빈도 갱신
      maxCnt = c;
      mode = x;
      tie = 1;
    } else if (c === maxCnt) { // 최대 빈도와 동률인 값 발생
      // 기존 mode와 다른 값이 같은 빈도로 올라온 경우 최소 2개 이상
      tie = 2;
    }
  }
  return tie >= 2 ? -1 : mode;
}
