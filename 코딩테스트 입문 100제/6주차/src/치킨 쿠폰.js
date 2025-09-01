// 내가 푼 코드
function solution(chicken) {
    var answer = 0;
    let service = Math.floor(chicken / 10);
    answer += service;

    while (true) {
        if (service <= 0) {
            return answer;
        }

        service = Math.floor(service / 10); // 남은 쿠폰을 고려하지 않아, 문제를 틀려 버림
        answer += service;
    }

    return answer;
}


// GPT가 푼 코드
function solution(chicken) {
  let coupons = chicken;   // 시작은 주문한 치킨 수만큼 쿠폰
  let answer = 0;

  while (coupons >= 10) {
    const free = Math.floor(coupons / 10); // 이번에 교환할 무료 치킨
    answer += free;
    coupons = free + (coupons % 10);       // 무료치킨에서 생긴 쿠폰 + 남은 쿠폰
  }
  return answer;
}