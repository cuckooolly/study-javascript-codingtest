function solution(num_list, n) {
    var answer = [];
    let index = 0;
    let row_length = num_list.length / n;

    for (let row=0; row<row_length; row++) {
        const temp = []
        for (let col=0; col<n; col++) {
            temp.push(num_list[index]);
            index++;
        }
        answer.push(temp)
    }

    return answer;
}