// 내 풀이: 이항 연산은 계산하나, 삼항 이상의 연산은 계산하지 못함
function solution(my_string) {
    let answer = 0;

    const my_arr = my_string.split(" ");
    console.log(my_arr);

    for (let i=0; i<my_arr.length; i++){
        if (parseInt(my_arr[i])){
            continue;
        } else {
            switch (my_arr[i]) {
                case "+":
                    answer = parseInt(my_arr[i-1]) + parseInt(my_arr[i+1]);
                    break;
                case "-":
                    answer = my_arr[i-1] - my_arr[i+1];
                    break;
            }
        }
    }
    return answer;
}

// GPT의 문제 풓이
function solution(my_string) {
  const arr = my_string.split(' ');
  let answer = Number(arr[0]);           // ① 첫 숫자로 초기화

  for (let i = 1; i < arr.length; i += 2) { // ② 연산자 위치만 순회
    const op = arr[i];
    const val = Number(arr[i + 1]);      // ④ 숫자 변환 일관화
    if (op === '+') {
      answer += val;                     // ③ 누적
    } else {
      answer -= val;                     // ③ 누적
    }
  }
  return answer;                         // 정수 범위 내이므로 Number 그대로 반환
}
