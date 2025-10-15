class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        this.items[this.rear++] = item;
    }

    dequeue() {
        return this.items[this.front++];
    }

    size() {
        return this.rear - this.front;
    }
}

function solution(N, K) {
    const queue = new Queue();

    // 1부터 N까지의 숫자를 큐에 삽입
    for (let i = 1; i <= N; i++) {
        queue.enqueue(i);
    }

    // K번째 사람을 제거하는 과정 반복
    while (queue.size() > 1) {
        // K-1번 이동 후 K번째 사람 제거
        for (let i = 0; i < K - 1; i++) {
            queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
    }

    return queue.dequeue();
}


console.log(solution(8, 3)); // 7: 이유 - 1,2,3(제거),4,5,6,7,8 -> 4,5,6,7,8,1 -> 4,5,6(제거),7,8,1 -> 7,8,1,4 -> 7,8(제거),1,4 -> 1,4(제거),7 -> 7(남음)