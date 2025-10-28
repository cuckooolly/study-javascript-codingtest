/* 문제 설명
이진 트리를 표현한 배열이 주어졌을 때, 전위 순회(preorder), 중위 순회(inorder), 후위 순회(postorder)를
각각 수행한 결과를 문자열로 반환하는 함수 solution을 완성하세요.
 */

function preorder(node, idx) {
    // 재귀함수에서 종료를 위한 조건: idx가 노드의 길이보다 크거나 같을 때, 빈 문자열 반환
    if (idx >= node.length) return '';

    // 현재 노드의 값을 문자열로 변환하고, 왼쪽과 오른쪽 서브트리를 순회한 결과를 이어붙임
    let returnStr = `${node[idx]}`;
    returnStr += preorder(node, idx * 2 + 1);
    returnStr += preorder(node, idx * 2 + 2);

    // 순회한 결과를 반환
    return returnStr;
}

function inorder(node, idx) {
    if (idx >= node.length) return '';

    let returnStr = inorder(node, idx * 2 + 1);
    returnStr += `${node[idx]}`;
    returnStr += inorder(node, idx * 2 + 2);

    return returnStr;
}

function postorder(node, idx) {
    if (idx >= node.length) return '';

    let returnStr = postorder(node, idx * 2 + 1);
    returnStr += postorder(node, idx * 2 + 2);
    returnStr += `${node[idx]}`;

    return returnStr;
}

function solution(nodes) {
    return [
        preorder(nodes, 0),
        inorder(nodes, 0),
        postorder(nodes, 0)
    ];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]))