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
function trim () {
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

function testStringTrim () {
    String.prototype.trim = trim;

    // 测试
    console.log("     test   test  1111test  ".trim());
}

// testStringTrim();

/**
 * 手写 JSON.stringfy
 * 要点：
 * 1、JSON.stringfy 参数和调用结果
 * 2、递归
 * 3、借用 Object.prototype.toString
 */
function handWriteJsonStringfy () {
    function myJsonStringfy (jsonObj) {

    }

    function bindJsonStringfy () {
        window.JSON.stringify = myJsonStringfy;
    }

    function testMyJsonStringfy () {
        bindJsonStringfy();
        let testCases = [];
        testCases.push(
            {
                a: "11",
            },
        );
        for (const testCase of testCases) {
            console.log(JSON.stringify(testCase));
        }
    }

}

// 手写 Json.parse
function handWriteJsonParse () {

}

// 实现 Array.isArray
/**
 * 实现 Array.isArray(obj)
 */
function isArrayImpl () {
    /**
     * 判断变量是否为数组的4种方式
     * @param arr
     * @returns {boolean}
     */
    function isArray (arr) {
        return Array.isArray(arr);
    }
}

/**
 * TODO: 支持传入层数 和 迭代解
 *
 * 拍平数组
 */
const flatArr = () => {
    /**
     * Solution: 递归
     * @param arr
     * @returns {*[]}
     */
    const reduceFlat = function (arr) {
        const res = [];
        for (const el of arr) {
            if (Array.isArray(el)) res.push(...reduceFlat(el));
            else res.push(el);
        }

        return res;
    };

    const testByCase = (func) => {
        const case1 = [1, 2, [3, 4, 5, 6, [5, 6, 9, 9]], '7'];

        console.log(func(case1));
    };

    [reduceFlat].forEach(
        (func) => {
            testByCase(func);
        },
    );
};

// flatArr();

/**
 * 实现 instanceof
 * 用法： object instanceof constructor
 *
 * 检测构造函数 constructor 是否在 obj 的原型链上
 *
 * 检测步骤：
 * 1. 如果 Class 有静态方法 Symbol.hasInstance，那就直接调用这个方法
 * 2. 使用 obj instanceOf Class 检查 Class.prototype 是否等于 obj 的原型链中的原型之一
 */
const instanceOfImpl = () => {

    /**
     * 1. Class[Symbol.hasInstance](obj)
     * 2. obj.__proto__ === class.prototype
     * @param obj
     * @param cls
     * @returns {boolean|*}
     */
    const instanceOf = (obj, cls) => {
        if (cls[Symbol.hasInstance]) return cls[Symbol.hasInstance](obj);

        let temp = obj,
            classProtoType = cls.prototype;

        while (temp.__proto__) {
            temp = temp.__proto__;
            if (temp === classProtoType) return true;
        }

        return false;
    };

    // 测试
    const testByCase = (func) => {
        console.log(func({}, Object));
    };

    [instanceOf].forEach(
        (func) => {
            testByCase(func);
        },
    );
};

// instanceOfImpl();

/**
 * 1
 * call
 */
const myCall = () => {

};

/**
 * 2
 * apply
 */
const myApply = () => {

};

/**
 * 3
 * bind
 */
const myBind = () => {

};

// Promise -> build-in

// 4
// LRU Cache -> lc

// 5
// LFU Cache

