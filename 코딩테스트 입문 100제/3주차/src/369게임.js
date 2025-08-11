function solution(order) {
    var answer = 0;

    order = order.toString();
    for (o of order){
        if (o == 3 || o == 6 || o == 9) {
            answer += 1;
        }
    }

    return answer;
}