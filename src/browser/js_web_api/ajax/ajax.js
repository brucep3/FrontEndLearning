// noinspection DuplicatedCode

/**
 * @Description
 *
 * 手写 Ajax
 * - 直接模拟
 * - 通过 Promise 实现 Ajax
 *
 * 封装 Ajax 的API
 * - JQuery
 * - fetch
 * - axios : 封装 XMLHttpRequest ， 支持 Promise
 *
 * @Author PAN Bruce
 * @Date 2021/8/5
 */

const dir = "/src/js_web_api/ajax/data";

/**
 * xhr 进行 get 请求
 */
const testXhrGet = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", dir + "/test.json", true);
    // 相当于 img.onload = function () {}
    xhr.onreadystatechange = function () {
        // readyState 的取值
        // 0 - 未初始化，还未调用 send() 方法
        // 1 - 载入，正在发送请求
        // 2 - 载入完成
        // 3 - 交互
        // 4 - 完成
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // console.log(
                //     JSON.parse(xhr.responseText)
                // )
                alert(xhr.responseText);
            } else if (xhr.status === 404) {
                console.log("404 not found");
            }
        }
    };
    xhr.send(null);
};

// testXhrGet();

const testXhrPost = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", dir + "/test.json", true);
    // img.onload = function () {}
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // console.log(
                //     JSON.parse(xhr.responseText)
                // )
                alert(xhr.responseText);
            } else if (xhr.status === 404) {
                console.log("404 not found");
            }
        }
    };
    const postData = {
        userName: "zhangsan",
        password: "xxx",
    };
    xhr.send(JSON.stringify(postData));
};

// testXhrPost();

/**
 * Promise 形式实现 ajax
 */
const ajaxImplByPromise = () => {
    /**
     * ajax
     * @param url
     * @returns {Promise<unknown>}
     */
    function ajax (url) {
        const p = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(
                            JSON.parse(xhr.responseText),
                        );
                    } else if (xhr.status === 404 || xhr.status === 500) {
                        reject(new Error("404 not found"));
                    }
                }
            };

            xhr.send(null);
        });

        return p;
    }

    const testAjax = () => {
        const url = "/data/test.json";

        ajax(url).then(res =>
            console.log(res)).
            catch(err =>
                console.error(err),
            );
    };

    testAjax();
};

// ajaxImplByPromise();

/**
 * 通过 jQuery 进行 Ajax 请求
 */
const ajaxByJquery = () => {
    $.ajax();
};

/**
 * fetch
 */
const ajaxByFetch = () => {

};

/**
 * axios
 */
const ajaxByAxios = () => {

};
