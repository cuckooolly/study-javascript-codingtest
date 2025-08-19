function solution(my_string) {
    var answer = 0;
    const nums = my_string.match(/\d+/g) || [];
    nums.map(element => answer += Number(element));
    return answer;
}