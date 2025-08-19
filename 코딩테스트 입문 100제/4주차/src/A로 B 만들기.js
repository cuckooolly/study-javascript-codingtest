function solution(before, after) {
    const before_sorted = before.split("").sort();
    const after_sorted = after.split("").sort();

    return before_sorted.every((ch, i) => ch == after_sorted[i]) ? 1 : 0;
}