/**
 * @Description
 * 11. Promise，async/await
 * @Author PAN Bruce
 * @Date 2021/6/24
 */

// 11.2 Promise

/**
 * 用 promise 重新解决？
 * Q1:
 * 下列这段代码会输出什么？
 */
var quiz_11_2_1 = function () {
    let promise = new Promise(function (resolve, reject) {
        resolve(1);

        setTimeout(() => resolve(2), 1000);
    });

    promise.then(alert);
};

/**
 * Ans1:
 * then 的第一个参数是一个函数，该函数在 promise resolved 后运行并接收结果
 * 同时，只有第一次对 reject/resolve 的调用才会被处理
 * 所以：alert "1" ，第 2 个 alert "2" 不起作用
 */

/**
 * 基于 promise 的延时
 * Q2:
 * 内建函数 setTimeout 使用了回调函数。请创建一个基于 promise 的替代方案。
 * 函数 delay(ms) 应该返回一个 promise。这个 promise 应该在 ms 毫秒后被 resolve，所以我们可以向其中添加 .then，像这样：
 */
var quiz_11_2_2 = function () {
    function delay(ms) {
        // 你的代码
        return new Promise(
            function (resolve, reject) {
                setTimeout(resolve, ms);
            }
        );
    }

    delay(3000).then(() => alert('runs after 3 seconds'));
};

// TODO: Here
/**
 * 带有 promise 的圆形动画
 * Q3:
 * 重写任务 带回调的圆形动画 的解决方案中的 showCircle 函数，以使其返回一个 promise，而不接受回调。
 * 新的用法：
 */
var quiz_11_2_3 = function () {
    // 你的代码

    showCircle(150, 150, 100).then(div => {
        div.classList.add('message-ball');
        div.append("Hello, world!");
    });
};

// 11.2 Promise 链

