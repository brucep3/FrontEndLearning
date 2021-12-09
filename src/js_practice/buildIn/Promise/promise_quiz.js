/**
 * @Description
 *
 * Promise
 *
 * @Author PAN Bruce
 * @Date 2021/8/6
 */

/**
 * Promise.then 里抛出的错误能否被 try...catch 捕获，为什么？
 * try .. catch 捕获同步异常
 */
const quiz1 = () => {
    try {
        Promise.resolve().then(() => {
                throw new Error("Whoops.");
            },
        );
    } catch (e) {
        console.log(e); // ?
    }
};

quiz1();
