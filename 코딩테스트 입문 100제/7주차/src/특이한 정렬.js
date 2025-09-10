// 내가 푼 문제... 라기 보단, GPT가 푼 문제
function solution(numlist, n) {
    var answer = [...numlist];

    for (let i=0; i<numlist.length; i++) {
        for (let j=i+1; j<numlist.length; j++){
            // 1. Diff를 구한다
            const diff1 = Math.abs(answer[i] - n);
            const diff2 = Math.abs(answer[j] - n);

            // 2. 비교하여 앞/뒤 정렬한다. (Bubble Sort)
            if (diff1 > diff2) {
                [answer[i], answer[j]] = [answer[j], answer[i]];
            } else if (diff1 == diff2 && answer[i] < answer[j]) {
                [answer[i], answer[j]] = [answer[j], answer[i]];
            }
        }
    }

    return answer;
}

// 다른 사람이 푼 문제
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// or 연산자는 앞에 위치한 피연산자의 불린값을 따져서 false가 나오는 경우에만 다음 피연산자로 넘어가고 true일 경우 연산을 멈추고 원래 값을 반환합니다.
// 따라서 이 코드에서는 Math.abs(a - n) - Math.abs(b - n) 에서 값이 0(불린 값 판정으로 false)이 나오기 전까진 앞의 로직만 실행되므로
// 절대값의 차이가 나는 경우 내림차순 정렬, 절대값 차이가 나지 않는 같은 값일 경우에는 기존값을 기준으로 비교(b-a)하여 오름차순 정렬이 실행됩니다.

//js의 sort함수를 보면 음수를 반환하면 a가 먼저, 양수면 b가 순서가 먼저 되도록 짜여져 있고,
// b랑 a의 거리가 같은 상황 즉 Math.abs(a - n) - Math.abs(b - n)이게 0이 되는 상황이 되면
// ||연산자 뒤가 실행되면서 같은 거리일 경우 큰 수를 먼저 나오도록 하는거죠.

// 초보자 분들은 이런 코드를 보고 내 길이 아닌가보다 하기보다는
// 기본적인 for문과 if문으로 만들어진 코드를 보면서 차근차근 배워가시면 됩니다. 본인의 페이스로 공부하시길 바랍니다 :)