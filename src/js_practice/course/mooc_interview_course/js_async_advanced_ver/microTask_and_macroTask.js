// noinspection DuplicatedCode

/**
 * @Description
 *
 * 微任务和宏任务
 *
 * @Author PAN Bruce
 * @Date 2021/8/2
 */

// 微任务 比 宏任务早
const testOrder = () => {
    console.log(100);

    setTimeout(() => {
        console.log(200)
    });

    Promise.resolve().then(() => {
        console.log(300)
    });

    console.log(400);
    // 100 400 300 200
};

// testOrder();

// event loop 执行例子
const eventLoop = () => {
    console.log("Hi");

    setTimeout(function cb1 () {
        console.log("cb1");
    }, 5000);

    console.log("Bye");
};

// eventLoop();

// event loop 增加 DOM 渲染
const eventLoop2 = () => {
    const $p1 = $("<p>一段文字</p>");
    const $p2 = $("<p>一段文字</p>");
    const $p3 = $("<p>一段文字</p>");
    $("#container").append($p1).append($p2).append($p3);

    console.log("length ", $("#container").children().length);
    alert("本次 call stack 结束，DOM 结构已更新，但尚未触发渲染");
    // （alert 会阻断 js 执行，也会阻断 DOM 渲染，便于查看效果）
};

// eventLoop2();

/**
 * event loop 3
 *
 * 微任务：DOM 渲染前触发
 * 宏任务：DOM 渲染后触发
 */
const eventLoop3 = () => {
    const $p1 = $("<p>一段文字</p>");
    const $p2 = $("<p>一段文字</p>");
    const $p3 = $("<p>一段文字</p>");
    $("#container").append($p1).append($p2).append($p3);

    console.log("length ", $("#container").children().length);
    alert("本次 call stack 结束，DOM 结构已更新，但尚未触发渲染");
    // （alert 会阻断 js 执行，也会阻断 DOM 渲染，便于查看效果）
    // 到此，即本次 call stack 结束后（同步任务都执行完了），浏览器会自动触发渲染，不用代码干预

    // 微任务：DOM 渲染前触发
    Promise.resolve().then(() => {
        console.log("length1 Promise", $("#container").children().length); // 3
        alert("Promise then"); // DOM 渲染了吗？
    });

    // 宏任务：DOM 渲染后触发
    // 另外，按照 event loop 触发 DOM 渲染时机，setTimeout 时 alert ，就能看到 DOM 渲染后的结果了
    setTimeout(function () {
        console.log("length1 setTimeout", $("#container").children().length); // 3

        // alert('setTimeout 是在下一次 Call Stack ，就能看到 DOM 渲染出来的结果了');
        alert("setTimeout"); // DOM 渲染了吗？
    });
};

eventLoop3();
