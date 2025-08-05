function solution(dot) {
    var answer = 0;

    const axisX = dot[0];
    const axisY = dot[1];

    // 사분면 판단하기
    if (axisX > 0 && axisY > 0) { // 1사분면
        answer = 1;
    } else if (axisX < 0 && axisY > 0) { // 2사분면
        answer = 2;
    } else if (axisX < 0 && axisY < 0) { // 3사분면
        answer = 3;
    } else if (axisX > 0 && axisY < 0) { // 4사분면
        answer = 4;
    } else {
        throw new Error("잘못된 값을 입력하셨습니다.");
    }

    return answer;
}