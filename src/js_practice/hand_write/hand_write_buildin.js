/**
 * @Description 手撕代码：JavaScript内置函数实现
 * @Author PAN Bruce
 * @Date 2021/5/1
 */

/**
 * 手写 String.trim
 * 要点：
 * 1、什么是空格：通过枚举空格，或者正则表达式来判断
 * 2、如何截取：通过字符串自带的截取（substring, substr, slice），或者 replace 代替
 * 实现：https://www.cnblogs.com/rubylouvre/archive/2009/09/18/1568794.html
 * @returns {*|trim}
 */
function trim() {
    let str = this;
    let left = 0, right = str.length - 1;
    while (str.charAt(left) === " " && left <= right) {
        left++;
    }
    while (str.charAt(right) === " " && right >= left) {
        right--;
    }
    str = str.slice(left, right + 1);
    return str;
}

function testStringTrim() {
    String.prototype.trim = trim;

    // 测试
    console.log("     test   test  1111test  ".trim());
}

// testStringTrim();

// 手写 JSON.stringfy
/**
 * 手写 JSON.stringfy
 * 要点：
 * 1、JSON.stringfy 参数和调用结果
 * 2、递归
 * 3、借用 Object.prototype.toString
 */
function handWriteJsonStringfy() {
    function myJsonStringfy(jsonObj) {

    }

    function bindJsonStringfy() {
        window.JSON.stringify = myJsonStringfy;
    }

    function testMyJsonStringfy() {
        bindJsonStringfy();
        let testCases = [];
        testCases.push(
            {
                a: "11"
            }
        );
        for (const testCase of testCases) {
            console.log(JSON.stringify(testCase));
        }
    }

}

// 手写 Json.parse
function handWriteJsonParse() {

}


// 实现 Array.isArray
/**
 * 实现 Array.isArray(obj)
 */
function implIsArray() {
    /**
     * 判断变量是否为数组的4种方式
     * @param arr
     * @returns {boolean}
     */
    function isArray(arr) {
        return Array.isArray(arr);
    }
}


