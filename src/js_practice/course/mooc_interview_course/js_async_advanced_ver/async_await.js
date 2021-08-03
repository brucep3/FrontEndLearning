// noinspection DuplicatedCode

/**
 * async / await 基本使用
 */
const testAsyncAwaitBasicUse = () => {
    const src1 = "https://img.mukewang.com/5a9fc8070001a82402060220-100-100.jpg";
    const src2 = "https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg";

    // 匿名函数
    (async function () {
        const img1 = await loadImg(src1);
        console.log(img1.height, img1.width);

        const img2 = await loadImg(src2);
        console.log(img2.height, img2.width);
    })();

    // 另一种写法 async -> await function -> async function
    function loadImg (src) {
        const p = new Promise(
            (resolve, reject) => {
                const img = document.createElement('img');
                img.onload = () => {
                    resolve(img);
                };
                img.onerror = () => {
                    const err = new Error(`图片加载失败 ${src}`);
                    reject(err);
                };
                img.src = src;
            },
        );
        return p;
    }
};

/**
 * async / await 和 Promise 的关系
 * 1. 执行 async 函数，返回的是 Promise 对象
 * 2. await 相当于 Promise 的 then
 * 3. try ... catch 可捕获异常，代替了 Promise 的 catch
 */
const relationBetweenAsyncAndPromise = () => {
    // 1. 执行 async 函数，返回的是 Promise 对象
    const test1 = () => {
        async function fn1 () {
            // 相当于 return Promise.resolve(100)
            return 100;
        }

        // 执行 async 函数，返回的是一个 Promise 对象
        const res1 = fn1();
        console.log("res1", res1); // Promise 对象

        res1.then(data => {
            console.log("data", 100);
        });
    };

    // test1();

    // 2. await 相当于 Promise 的 then
    const test2 = () => {
        !(async function () {
            const p1 = Promise.resolve(300);
            const data = await p1; // await 相当于 Promise then

            console.log("data", data);
        })();

        !(async function () {
            const data = await 400; // await Promise.resolve(400);

            console.log("data", data);
        })();

        function fn1 () {
            // 相当于 return Promise.resolve(100)
            return 100;
        }

        !(async function () {
            const data = await fn1(1); // await Promise.resolve(400);

            console.log("data", data);
        })();
    };

    // test2();

    // 3. try ... catch 可捕获异常，代替了 Promise 的 catch
    const test3 = () => {
        !(async function () {
            const p4 = Promise.reject("err"); // rejected 状态
            try {
                const res = await p4;
            } catch (ex) {
                // try ... catch 可捕获异常，代替了 Promise 的 catch
                console.log(ex);
            }
        })();

        !(async function () {
            const p4 = Promise.reject("err"); // rejected 状态
            const res = await p4; // await -> then

            // 不会捕获
            console.log("res", res);
        })();
    };

    test3();
};

// relationBetweenAsyncAndPromise();
