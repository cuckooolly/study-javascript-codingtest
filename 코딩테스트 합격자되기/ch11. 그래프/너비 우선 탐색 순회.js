class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
        this.items.push(item);
        this.rear++;
    }

    pop() {
        return this.items[this.front++];
    }

    isEmpty() {
        return this.rear === this.front;
    }
}

function solution(graph, start) {
    // 그래프를 인접 리스트로 변환
    const adjList = {};
    for (let [u, v] of graph) {
        if (!adjList[u]) adjList[u] = [];
        adjList[u].push(v);
    }

    const visited = new Set(); // 방문한 노드를 저장할 Set

    // 탐색 시 맨 처음 방문할 노드를 Push하고 방문처리
    const queue = new Queue();
    queue.push(start);
    visited.add(start);
    const result = [start];

    // 큐가 비어 있지 않은 동안 반복
    while (!queue.isEmpty()) {
        const node = queue.pop(); // 큐에 있는 원소 중 가장 먼저 Push된 원소를 Pop
        for (let neighbor of (adjList[node] || [])) { // 인접한 이웃 노드들에 대해서
            if (!visited.has(neighbor)) { // 방문되지 않은 이웃 노드인 경우
                // 이웃 노드를 방문 처리함
                queue.push(neighbor);
                visited.add(neighbor);
                result.push(neighbor);
            }
        }
    }
    return result;
}

// 교재의 입출력 예시가 잘못되어 있습니다.
console.log(solution([[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]], 1))