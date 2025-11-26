// function solution(arr1, arr2){
//     const array = [];
//
//     if (arr1.length !== arr2.length) return -1;
//
//     for (let i= 0; i<arr1.length; i++) {
//         if (arr1[i] < arr2[i]) {
//             array.push(arr1[i]);
//             array.push(arr2[i]);
//         } else {
//             array.push(arr2[i]);
//             array.push(arr1[i]);
//         }
//     }
//
//     return array;
// }

function solution(arr1, arr2){
    const array = []; // 정렬된 배열을 저장할 배열 생성
    let i = 0, j = 0; // 두 배열의 인덱스 초기화

    // 두 배열을 순회하면서 정렬된 배열을 생성
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            array.push(arr1[i]);
            i++;
        } else {
            array.push(arr2[j]);
            j++;
        }
    }

    // arr1 또는 arr2에 남아있는 요소들을 추가
    while (i < arr1.length) {
        array.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        array.push(arr2[j]);
        j++;
    }

    return array;
}

console.log(solution([1,3,5],[2,4,6]));