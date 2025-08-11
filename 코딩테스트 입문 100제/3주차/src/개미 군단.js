function solution(hp) {
    var answer = 0;

    // 장군 개미 (5HP) 계산하기
    answer += Math.floor(hp / 5);
    hp %= 5;
    console.log("개미 수: ",answer)
    console.log("남은 체력: ",hp)

    // 병졍 개미 (3HP) 계산하기
    answer += Math.floor(hp / 3);
    hp %= 3;
    console.log("개미 수: ",answer)
    console.log("남은 체력: ",hp)

    // 일 개미 (1HP) 계산하기
    answer += hp;

    return answer;
}