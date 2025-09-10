// 내가 짠 코드
function isTwoFiveNumber(n) { // 2와 5인 소인수
  if (n < 1) return false; // 0이나 음수는 제외

  // 2로 나누기
  while (n % 2 === 0) {
    n /= 2;
  }

  // 5로 나누기
  while (n % 5 === 0) {
    n /= 5;
  }

  // 1이 되면 2와 5로만 이루어진 수
  return n === 1;
}

function solution(a, b) {
    var answer = 0;

    // 기약 분수 만들기 -> 최대공약수로 약분해야 하는 것을, 그냥 약분했음
    if (b % a == 0) {
        b /= a;
    }

    // 분모의 소인수 판별
    if (isTwoFiveNumber(b) == true) {
        return 1
    }

    return 2;
}


// GPT가 작성한 코드
// 분모가 2와 5로만 이루어져 있는지 검사하는 함수
function isTwoFiveNumber(n) {
  // 2로 나눌 수 있는 만큼 나누기
  while (n % 2 === 0) {
    n /= 2;
  }

  // 5로 나눌 수 있는 만큼 나누기
  while (n % 5 === 0) {
    n /= 5;
  }

  // 나머지가 1이면 소인수가 2와 5뿐임
  return n === 1;
}

// 최대공약수(GCD) 구하기 - 유클리드 호제법
function gcd(a, b) {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

// 메인 solution 함수
function solution(a, b) {
  // 1. a/b를 기약분수로 변환하기 위해 최대공약수로 약분
  const divisor = gcd(a, b);
  const reducedB = b / divisor; // 기약분수의 분모

  // 2. 기약분모가 1이면 정수 → 유한소수
  if (reducedB === 1) return 1;

  // 3. 기약분모가 2와 5로만 이루어졌는지 판별
  return isTwoFiveNumber(reducedB) ? 1 : 2;
}

// 다른 사람이 푼 코드
function solution(a, b) {
    let n = 1;
    for (let i = 1; i <= Math.min(a,b); i++) {
        if (a%i===0 && b%i===0) n = i;
    }

    b/=n;
    while (b%2===0) b/=2;
    while (b%5===0) b/=5;

    return b === 1 ? 1 : 2;
}