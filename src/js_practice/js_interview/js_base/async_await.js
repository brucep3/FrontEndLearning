// noinspection DuplicatedCode

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

const test2 = () => {
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

test2();
