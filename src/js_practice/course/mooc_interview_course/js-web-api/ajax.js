/**
 * @Description
 *
 * 手写 Ajax
 *
 * @Author PAN Bruce
 * @Date 2021/8/5
 */

const dir = "/src/js_practice/course/mooc_interview_course/js-web-api/data";

/**
 * xhr 进行 get 请求
 */
const testXhrGet = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", dir + "/test.json", false);
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
    xhr.open("POST", dir + "/test.json", false);
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

testXhrPost();

const handWriteAjax = () => {
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

    const url = "/data/test.json";
    ajax(url).then(res => console.log(res)).catch(err => console.error(err));
};


