/**
 * TODO: 支持传入层数 和 迭代解
 *
 * 拍平数组
 */
const flatArr = () => {
    /**
     * Solution: 递归
     * @param arr
     * @returns {*[]}
     */
    const reduceFlat = function (arr) {
        const res = [];
        for (const el of arr) {
            if (Array.isArray(el)) res.push(...reduceFlat(el));
            else res.push(el);
        }

        return res;
    };

    const testByCase = (func) => {
        const case1 = [1, 2, [3, 4, 5, 6, [5, 6, 9, 9]], "7"];

        console.log(func(case1));
    };

    [reduceFlat].forEach(
        (func) => {
            testByCase(func);
        },
    );
};

// flatArr();
