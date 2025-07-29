function solution(num_list) {
    var answer = [];
    
    let numOdd = 0, numEven = 0;
    
    for (let num of num_list) {
        if (num % 2 === 0) {
            numEven++;
        } else {
            numOdd++;
        }
    }
    
    answer.push(numEven);
    answer.push(numOdd);
    
    return answer;
}