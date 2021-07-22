/**
 * 实现 randomRangeNum 方法，接收 max， min， n 三个参数，
 * 返回一个数组，要求：
 * 1、数组长度为 n
 * 2、数组元素唯一
 * 3、数组元素的取值范围是 [min, max]
 * 4、时间和空间复杂度是 O(n)
 * arr[i] ∈ [min, max]
 * @param max
 * @param min
 * @param n
 */
const randomRangeNum = function (max, min, n) {
    let temp = 0,
        // [min, max] -> [0, max - min]
        range = max - min + 1;

    // pool[0, max - min] -> target value = pool[i] + min;
    const pool = new Array(range).fill(null).map(() => temp++);

    const swap = (pool, i, j) => {
        let temp = pool[i];
        pool[i] = pool[j];
        pool[j] = temp;
    };

    const resArr = new Array(n).fill(null).map(
        () => {
            let targetIdx = Math.ceil(range-- * Math.random());
            let res = pool[targetIdx] + min;
            swap(pool, targetIdx, range);
            return res;
        }
    );

    return resArr;
};

console.info(randomRangeNum(100, 30, 15));