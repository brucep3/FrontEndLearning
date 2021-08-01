// noinspection DuplicatedCode

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

// const url = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'
// loadImg(url).then(img => {
//     console.log(img.width)
//     return img
// }).then(img => {
//     console.log(img.height)
// }).catch(ex => console.error(ex))

// const url1 = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg';
// const url2 = 'https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg';
//
// loadImg(url1).then(img1 => {
//     console.log(img1.width);
//     return img1; // 普通对象
// }).then(img1 => {
//     console.log(img1.height);
//     return loadImg(url2); // promise 实例
// }).then(img2 => {
//     console.log(img2.width);
//     return img2;
// }).then(img2 => {
//     console.log(img2.height);
// }).catch(ex => console.error(ex));

const loadImgByPromise = tryPromise => {
    function loadImg (src) {
        return new Promise(
            ((resolve, reject) => {
                const img = document.createElement("img");
                // 加载完的回调函数
                img.onload = () => {
                    resolve(img);
                };

                img.onerror = () => {
                    reject(new Error(`图片加载失败 ${src}`));
                };

                img.src = src;
            }),
        );
    }

    const url = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg';

    loadImg(url).then(img => {
        console.log(img.width);
        return img;
    }).then(img => {
        console.log(img.height);
    }).catch(ex =>
        console.error(ex),
    );
};

// loadImgByPromise();

// 测试 Promise 的 3种状态： pending, resolved, rejected
const testPromiseState = () => {
    const p1 = new Promise((resolve, reject) => {

    });

    console.log("p1", p1); // pending

    // resolved
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        });
    });

    console.log("p2 ", p2); // pending 一开始打印时

    // resolved ? fullfilled ?
    setTimeout(() => console.log("p2-setTimeout ", p2));

    // rejected
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
        });
    });

    console.log("p3 ", p3); // pending 一开始打印时
    setTimeout(() => console.log("p3-setTimeout ", p3));
};

// testPromiseState();

// Promise 状态转换
const testPromiseResolvedChange = () => {
    const p1 = Promise.resolve(100); // resolved
    console.log(p1);

    p1.then(data => {
        console.log("data", data);
    }).catch(err => {
        console.log("err", err);
    });

    const p2 = Promise.reject("err"); // rejected
    p2.then(data => {
        console.log("data2", data);
    }).catch(err => {
        console.error("err2", err);
    });
};

// 测试 then 和 catch 改变状态
const testPromiseStateChange = () => {
    const p1 = Promise.resolve().then(() => {
        return 100;
    });

    console.log("p1", p1); // resolved

    const p2 = Promise.resolve().then(() => {
        return new Error("then error");
    });

    console.log("p2", p2); // resolved

    const p3 = Promise.reject("My error").catch(err => {
        console.error(err);
    }); // rejected

    console.log("p3", p3);

    // resolved 可以出发 then 回调
    p3.then(() => {
        console.log(100);
    });

    const p4 = Promise.reject("My error").catch(err => {
        throw new Error("Catch error");
    }); // rejected
    console.log("p4", p4); // rejected 出发 catch 回调

    p4.then(() => {
        console.log(200);
    }).catch(() => {
        console.log("some err");
    }); // resolved
};

// testPromiseStateChange();
