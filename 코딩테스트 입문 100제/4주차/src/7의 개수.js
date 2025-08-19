function solution(array) {
    var answer = 0;

    for (arr of array) {
        arr = new String(arr);
        if (arr.includes("7")) {
            for (a of arr){
                if (a.includes("7")){
                    answer += 1;
                }
            }
        }
    }
    return answer;
}