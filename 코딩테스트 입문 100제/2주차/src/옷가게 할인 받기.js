function solution(price) {
    var answer = 0;
    let saleRatio = 0;

    if (price >= 500000) {
        saleRatio = 0.2;
    } else if (price >= 300000) {
        saleRatio = 0.1;
    } else if (price >= 100000) {
        saleRatio = 0.05;
    }

    answer = price * (1-saleRatio);
    return Math.floor(answer);
}