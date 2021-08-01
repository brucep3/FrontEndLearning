/**
 * @Description 手撕代码：常见工具方法实现（jQuery / lodash）
 * @Author PAN Bruce
 * @Date 2021/5/1
 */

/**
 * js 里的浅拷贝： Object.assign(targetObj, sourceObj)
 * 深拷贝数组/对象：通过 spread
 * @param {Object | []} obj
 * @returns {Object}
 */
function deepCopy (obj) {
    if (isArray(obj)) {
        return deepCopyArr(obj);
    }
    return deepCopyObj(obj);

    /**
     * 拷贝数组
     * @param arr
     * @returns {*[]}
     */
    function deepCopyArr (arr) {
        return [...arr];
    }

    /**
     * 拷贝对象
     * @param obj
     * @returns {*}
     */
    function deepCopyObj (obj) {
        return { ...obj };
    }
}

// 以下面试手写题参考自：https://www.zhihu.com/people/codermagefox/posts

/**
 * TODO: V3 和 V4
 * Depp clone （深拷贝）
 * Ref: https://cloud.tencent.com/developer/article/1497418
 *
 * 区分复制、浅拷贝和深拷贝
 * - 赋值：创建一个新对象，如果原对象是原始类型就是两个值，如果是原对象是类型则共用一个对象
 * - 浅拷贝：创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝
 * - 深拷贝：将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新
 * 对象不会影响原对象
 *
 * 版本
 * - V1 序列化与反序列化
 * - V2 拷贝对象和数组 (推荐）
 * - V3 解决循环引用
 * - V4 支持函数拷贝和各种内置对象和类型
 * @param target
 */
const deepClone = (target) => {
    /**
     * 最简单的深拷贝
     * 缺点：拷贝其他引用类型、拷贝函数、循环引用
     * @param target
     * @returns {any}
     */
    const deepCloneV1 = (target) => {
        return JSON.parse(JSON.stringify(target));
    };

    /**
     * 深拷贝V2
     * 方法：递归 + 对象和数组处理
     * 优点：拷贝对象和数组
     * 缺点：循环引用；
     * @param target
     */
    const deepCloneV2 = function deepClone (target) {
        if (target instanceof Object) {
            const cloneObj = Array.isArray(target) ? [] : {};
            for (const key in target) {
                cloneObj[key] = deepClone(target[key]);
            }
            return cloneObj;
        }
        // typeof target !== "object"
        return target;
    };

    // 解决循环引用：WeakMap
    /**
     * 深拷贝V3
     * 方法：WeakMap
     * 优点：解决循环引用
     * @param target
     */
    const deepCloneV3 = function deepClone (target) {

    };

    // 各种类型对象支持

    // 函数的拷贝

    const testDeepClone = (deepCloneFunc) => {
        const target1 = undefined;
        console.log(deepCloneFunc(target1));

        const target2 = null;
        console.log(deepCloneFunc(target2));

        const target3 = {
            field1: 1,
            field2: undefined,
            field3: 'ConardLi',
            field4: {
                child: 'child',
                child2: {
                    child2: 'child2',
                },
            },
        };
        console.log(deepCloneFunc(target3));

    };

    testDeepClone(deepCloneV2);
};

// deepClone();

/**
 * 柯里化 add 函数，使得 add(1)(2)(3) 成立
 * 相关知识点：柯里化
 *
 * Solution: 迭代 （类似拍平数组，将参数拍平）
 *
 * 版本
 * V1: 仅支持 add(1)(2)(3)
 * V2 (currying，推荐): 支持传入参数累计达到 k 个时（k === 3) , 得到结果
 * V3: 支持任意次数任意多参数调用（类型转换）
 * V4: 支持任意次数任意多参数调用（最后再调用一次）
 */
const curryingAdd = () => {
    /**
     * v1 : 仅支持 add(1)(2)(3)
     * @param x
     * @returns {function(*): function(*): *}
     */
    const curryingAddV1 = function (x) {
        return function (y) {
            return function (z) {
                return x + y + z;
            }
        };
    };

    /**
     * V2 (currying): 支持传入参数累计达到 k 个时（k === 3) , 得到结果
     */
    const curryingAddV2 = (function () {
        const add = function (x, y, z) {
            return x + y + z;
        };

        // How to use: const curriedAdd = curry(add);
        const curry = function curry (func) {
            // return decorated function
            return function curried (...args) {
                if (args.length >= func.length) {
                    return func.apply(this, args);
                    // args.length < func.length
                } else {
                    return function pass (...args2) {
                        return curried.apply(this, args.concat(args2));
                    };
                }
            };
        };

        return curry(add);
    })();

    /**
     * V3: 支持任意次数任意多参数调用
     * Solution: 闭包 + 类型转换
     */
    const curryingAddV3 = (() => {
        const add = function (...args) {
            // 闭包
            let total = args.reduce(
                (acc, val) => acc + val,
                0,
            );

            function fn (...args2) {
                total += args2.reduce(
                    (acc, val) => acc + val,
                    0,
                );
                return fn;
            }

            fn.toString = () => "" + total;
            fn.valueOf = () => total;

            return fn;
        };

        return add;
    })();

    // console.log(curryingAddV3(3, 2, 3)(2, 1, 2)(1) + 0);

    /**
     * V4: 支持任意次数任意多参数调用（最后再调用一次）
     */
    const curryingAddV4 = (() => {
        function add (...args) {
            let sum = args.reduce((acc, cur) => acc + cur);
            return function (...nextArgs) {
                return nextArgs.length ? add(sum, ...nextArgs) : sum;
            }
        }

        return add;
    })();

    // console.log(curryingAddV4(1, 2, 3)(4, 5)());

    /**
     * 测试
     * @param func
     */
    const testCurryingAdd = (func) => {
        // Test Case 1. add(1)(2)(3)
        console.log(func(3)(2)(1));

        // Test Case 2. 任意参数
        // console.log(curriedAdd(1)(2)(3)(6)(8)(9));
    };

    [
        curryingAddV1,
        curryingAddV2,
        curryingAddV3,
        curryingAddV4,
    ].forEach((val) => {
        testCurryingAdd(val);
    });
};

// curryingAdd();

/**
 * 防抖：当事件触发n秒后再执行回调，若n秒内再次触发，则重新计时
 */
const debounce = () => {
    /**
     * Solution: 装饰器 + 计时器
     * @param func
     * @param delay
     * @returns {(function(...[*]=): void)|*}
     */
    const debounceFunc = (func, delay) => {
        let timer = null;

        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(
                () => func.apply(this, args),
                delay);
        };
    };

    // TODO: test
};

/**
 * 节流：触发事件后立马执行，但在n秒内再次触发不会执行，n秒后才会执行。(
 * 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内
 * 某事件被触发多次，只有一次能生效。)
 */
const throttle = () => {
    /**
     * Solution: 装饰器 + timeout
     * @param func
     * @param delay
     * @returns {(function(...[*]=): void)|*}
     */
    const throttleFunc = (func, delay) => {
        let timeout = true;

        return function (...args) {
            if (!timeout) return;

            timeout = false;
            setTimeout(() => {
                func.apply(this, args);
                timeout = true;
            }, delay);
        };
    };

    const testThrottle = () => {
        const throttledFunc = throttleFunc(() => console.log(1), 1000);
        throttledFunc(); // 1000 ms 后执行
        throttledFunc(); // 不执行
    };

    testThrottle();
};

// 9
// 继承的 n 种方式

// EventEmitter

// 异步串行，异步并行

// 缓存函数

// 懒加载
// 8

// 数组三等分 -> lc-1013. 将数组分成和相等的三个部分

/**
 * 数字保留两位小数，同时设置千位分隔符为 “,"
 */
const formatNum = () => {
    /**
     * 数字保留两位小数，同时设置千位分隔符为 “,"
     * @param num
     * @returns {string}
     */
    const formatNum = (num) => {
        let [int, fraction] = ("" + num).split(".");

        const arr = [];
        for (let i = int.length; i > 0; i -= 3) {
            arr.push(int.slice(i - 3 >= 0 ? i - 3 : 0, i));
        }
        const resInt = arr.reverse().join(",");

        if (!fraction) return resInt + "." + "00";
        if (fraction.length < 2) return resInt + "." + fraction + "0";
        return resInt + "." + fraction.slice(0, 2);
    };

    console.log(formatNum(128381368.11224));
    console.log(formatNum(128381368.1));
    console.log(formatNum(128381368.));
};

// formatNum();

