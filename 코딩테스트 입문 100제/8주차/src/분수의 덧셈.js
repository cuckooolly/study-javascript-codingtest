// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// (힌트를 받아) 내가 푼 문제
function gcd(num1, num2){
    const bigNum = Math.max(num1, num2);
    const smallNum = Math.min(num1, num2);

    if (num2 == 0) {
        return num1;
    }

    return gcd(smallNum, bigNum % smallNum);
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    // 1. 정수 연산으로 통분을 수행한다.
    denom = denom1 * denom2;
    numer = numer1 * denom2 + numer2 * denom1;

    // 2. 최대공약수를 이용해, 기약분수로 약분한다.
    g = gcd(numer, denom);
    numer /= g;
    denom /= g;

    // 3. 구한 분자, 분모 값을 배열에 삽입
    answer.push(numer);
    answer.push(denom);

    return answer;
}

// 다른 사람의 풀이
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

function solution(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum/gcd, num/gcd];
}