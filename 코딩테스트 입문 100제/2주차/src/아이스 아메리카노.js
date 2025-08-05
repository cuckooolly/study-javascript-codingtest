function solution(money) {
    var answer = [];

    const iceAmericano = Math.trunc(money / 5500);
    const changeMoney = money % 5500;

    answer = [iceAmericano, changeMoney];

    return answer;
}