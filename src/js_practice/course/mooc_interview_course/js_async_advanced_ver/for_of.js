/**
 * @Description
 *
 * for ... of 用于异步的遍历
 *
 * @Author PAN Bruce
 * @Date 2021/8/2
 */

const test1 = () => {
    function mul (num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num * num);
            }, 1000);

        });
    }

    const nums = [1, 2, 3];

    // 1 秒后同时算出来 3 个结果
    // nums.forEach(
    //     async (i) => {
    //         const res = await mul(i);
    //
    //         console.log(res);
    //     },
    // );

    //  1 次 (1 秒)出现一个结果，依次出现
    !(async function () {
        for (const num of nums) {
            const res = await mul(num);

            console.log(res);
        }
    })();

};

test1();



