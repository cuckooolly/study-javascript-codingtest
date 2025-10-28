/* 문제 설명
첫 번째 인수 lst를 이용하여 이진 탐색 트리를 생성하고,
두 번째 인수 searchList에 있는 각 노드를 이진 탐색 트리에서 찾을 수 있는지 확인하여
true 혹은 false를 담은 배열 result를 반환하는 함수 solution을 작성하세요.
 */

function solution(list, searchList){
    let result = [];

    for (const search of searchList) {
        let idx = Math.ceil(list.length / 2);

        while (true){
            if (idx < 0) {
                // 왼쪽 밖으로 빠지는 경우
                result.push(false);
                break;
            } else if ( idx > list.length ) {
                // 오른쪽 밖으로 빠지는 경우
                result.push(false);
                break;
            } else if ( list[idx] == search ){
                // idx에서 값을 찾은 경우
                result.push(true);
                break;
            } else {
                if (search < list[idx]) {
                    // 왼쪽 노드로 이동
                    idx = idx * 2 + 1;
                } else {
                    // 오른쪽 노드로 이동
                    idx = idx * 2 + 2;
                }
            }
        }
    }

    return result;
}

console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]))