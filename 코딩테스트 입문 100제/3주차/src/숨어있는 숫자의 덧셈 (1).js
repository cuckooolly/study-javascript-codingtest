function solution(my_string) {
    var answer = 0;

    const numbers = my_string.replace(/\D/g,"").split("");
    for (num of numbers) {
        answer += Number(num);
    }


    return answer;
}