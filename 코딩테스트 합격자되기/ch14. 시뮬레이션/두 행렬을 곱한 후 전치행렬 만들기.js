/**
 * 문제: 두 행렬을 곱한 다음에, 그 결과 행렬을 전치행렬로 만드는 함수를 작성하는 문제입니다.
 *
 * 행렬 곱셈 조건: matrix1의 열 개수 = matrix2의 행 개수
 * 결과 행렬 크기: matrix1의 행 개수 x matrix2의 열 개수
 * 전치행렬: 행과 열을 바꾼 행렬 (A[i][j] → A^T[j][i])
 */

/**
 * 행렬 곱셈을 수행하는 함수
 *
 * 행렬 곱셈 원리:
 * C[i][j] = Σ(A[i][k] * B[k][j]) for k = 0 to n-1
 *
 * 예시:
 * [1, 2]   [5, 6]   [1*5+2*7, 1*6+2*8]   [19, 22]
 * [3, 4] × [7, 8] = [3*5+4*7, 3*6+4*8] = [43, 50]
 *
 * @param {number[][]} matrix1 - 첫 번째 행렬 (m x n)
 * @param {number[][]} matrix2 - 두 번째 행렬 (n x p)
 * @returns {number[][]} - 곱셈 결과 행렬 (m x p)
 */
function multiplyMatrix(matrix1, matrix2) {
    // 행렬 곱셈 가능 여부 검증
    // matrix1의 열 개수와 matrix2의 행 개수가 같아야 곱셈 가능
    if (matrix1[0].length !== matrix2.length) {
        throw new Error("행렬 곱셈이 불가능합니다.");
    }

    // 결과 행렬 초기화
    // 크기: matrix1의 행 개수 x matrix2의 열 개수
    // 모든 요소를 0으로 초기화 (누적 합산을 위해)
    const result = Array.from({ length: matrix1.length }, () => Array(matrix2[0].length).fill(0));

    // 행렬 곱셈 수행 (3중 반복문)
    // i: 결과 행렬의 행 인덱스 (matrix1의 행)
    for (let i = 0; i < matrix1.length; i++) {
        // j: 결과 행렬의 열 인덱스 (matrix2의 열)
        for (let j = 0; j < matrix2[0].length; j++) {
            // k: 내적 계산을 위한 인덱스
            // matrix1[i][k]의 k는 matrix1의 열 / matrix2[k][j]의 k는 matrix2의 행
            // matrix1의 i번째 행과 matrix2의 j번째 열의 내적을 계산
            for (let k = 0; k < matrix2.length; k++) {
                // result[i][j] = matrix1의 i번째 행과 matrix2의 j번째 열의 내적
                // 예: result[0][0] = matrix1[0][0]*matrix2[0][0] + matrix1[0][1]*matrix2[1][0] + ...
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

/**
 * 전치행렬을 만드는 함수
 * 전치행렬(Transpose Matrix): 원본 행렬의 행과 열을 바꾼 행렬
 *
 * 예시:
 * [1, 2, 3]     [1, 4, 7]
 * [4, 5, 6]  →  [2, 5, 8]
 * [7, 8, 9]     [3, 6, 9]
 *
 * @param {number[][]} matrix - 원본 행렬 (m x n)
 * @returns {number[][]} - 전치행렬 (n x m)
 */
function transposeMatrix(matrix) {
    // 전치행렬 초기화
    // 원본이 m x n이면 전치행렬은 n x m
    // 행과 열의 크기가 바뀜
    let resultMatrix = Array.from({ length: matrix[0].length }, () => Array(matrix.length).fill(0));

    // 전치 연산 수행
    // 원본 행렬의 각 요소를 순회
    for (let i = 0; i < matrix.length; i++) { // 원본의 행 순회
        for (let j = 0; j < matrix[0].length; j++) { // 원본의 열 순회
            // 핵심: matrix[i][j]의 값을 resultMatrix[j][i]에 저장
            // 즉, 행 인덱스와 열 인덱스를 바꿔서 저장
            resultMatrix[j][i] = matrix[i][j];
        }
    }

    return resultMatrix;
}

/**
 * 솔루션 함수
 * 두 행렬을 곱한 후 전치행렬을 반환
 *
 * @param {number[][]} matrix1 - 첫 번째 행렬
 * @param {number[][]} matrix2 - 두 번째 행렬
 * @returns {number[][]} - (matrix1 × matrix2)의 전치행렬
 */
function solution(matrix1, matrix2) {
    // 1단계: 두 행렬을 곱하기
    const multiplyResult = multiplyMatrix(matrix1, matrix2);

    // 2단계: 곱셈 결과를 전치행렬로 변환
    const transposeResult = transposeMatrix(multiplyResult);

    // 최종 전치행렬 반환
    return transposeResult;
}

// 테스트
// [[1,2,3],[4,5,6],[7,8,9]] × [[9,8,7],[6,5,4],[3,2,1]]를 곱한 후 전치
console.log(solution([[1,2,3],[4,5,6],[7,8,9]], [[9,8,7],[6,5,4],[3,2,1]]));