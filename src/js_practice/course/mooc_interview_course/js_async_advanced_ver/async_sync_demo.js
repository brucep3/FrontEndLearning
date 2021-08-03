// noinspection DuplicatedCode
// noinspection JSIgnoredPromiseFromCall

/**
 * @Description
 *
 * 异步和同步
 *
 * @Author PAN Bruce
 * @Date 2021/8/2
 */

// 异步 （callback 回调函数）
const async_sync_demo = () => {
    console.log(100);

    setTimeout(() => {
        console.log(200);
    }, 1000);

    console.log(300);
    console.log(400);
    console.log("\n");
};

// 同步
const syncDemo = () => {
    console.log(100);
    // alert(200);
    console.log(200);
    console.log(300);
    console.log("\n");
};

// syncDemo();
// async_sync_demo();

/**
 * 异步的本质
 */
const test3 = () => {
    async function async1 () {
        console.log("async1 start"); // 2 重要

        await async2(); // undefined
        // await 的后面，都可以看做是 callback 里的内容，即异步
        // 类似， event loop, setTimeout(cb1)

        // setTimeout( function() {console.log("async1 end") })
        // Promise.resolve().then( () => {console.log("async1 end") } ) // 微任务 / 宏任务
        console.log("async1 end");
    }

    async function async2 () {
        console.log("async2"); // 3 重要
    }

    console.log("script start"); // 1
    async1();
    console.log("script end"); // 4
    // 同步代码已经执行完（event loop）
};

// test3();

// 增加异步函数
const test4 = () => {
    async function async1 () {
        console.log("async1 start"); // 2

        await async2();

        // 下面三行都是异步回调的内容
        console.log("async1 end"); // 5

        await async3();

            // 下面一行异步回调
            console.log("async1 end 2"); // 7
    }

    async function async2 () {
        console.log("async2"); // 3
    }

    async function async3 () {
        console.log("async3"); // 6
    }

    console.log("script start"); // 1
    async1();
    console.log("script end"); // 4
};

test4();
