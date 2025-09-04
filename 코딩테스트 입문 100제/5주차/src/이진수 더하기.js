// 내가 푼 문제
function solution(bin1, bin2) {
    const temp1 = parseInt(bin1, 2);
    const temp2 = parseInt(bin2, 2);

    return (temp1+temp2).toString(2);
}

// 다른 사람 풀이
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}