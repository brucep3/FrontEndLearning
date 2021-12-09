/**
 * @Description
 *
 * 执行顺序问题
 *
 * @Author PAN Bruce
 * @Date 2021/8/5
 */

const problems1 = () => {
    async function async1 () {
        console.log("async1 start"); // 2
        await async2(); // 这一句会同步执行，返回 Promise ，其中的 `console.log('async2')` 也会同步执行
        console.log("async1 end"); // 上面有 await ，下面就变成了“异步”，类似 cakkback 的功能（微任务） // 6
    }

    async function async2 () {
        console.log("async2"); // 3
    }

    console.log("script start"); // 1

    setTimeout(function () { // 异步，宏任务
        console.log("setTimeout"); // 8
    }, 0);

    async1(); // 2

    new Promise(function (resolve) { // 返回 Promise 之后，即同步执行完成，then 是异步代码
        console.log("promise1"); // Promise 的函数体会立刻执行 // 4
        resolve();
    }).then(function () { // 异步，微任务
        console.log("promise2"); // 7
    });

    console.log("script end"); // 5

// 同步代码执行完之后，屡一下现有的异步未执行的，按照顺序
// 1. async1 函数中 await 后面的内容 —— 微任务
// 2. setTimeout —— 宏任务
// 3. then —— 微任务
};

problems1();
