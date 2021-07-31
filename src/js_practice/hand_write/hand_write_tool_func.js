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
 * - V4
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

//
/**
 * 柯里化 add 函数，使得 add(1)(2)(3) 成立
 * 做法：迭代 （类似拍平数组，将参数拍平）
 * 相关知识点：
 */
const curryingAdd = () => {

};

curryingAdd();

// 防抖
/**
 * 防抖：当事件触发n秒后再执行回调，若n秒内再次触发，则重新计时
 * 实现方法：装饰器 + 计时器
 */
const debounce = () => {

};

//
/**
 * 节流：触发事件后立马执行，但在n秒内再次触发不会执行，n秒后才会执行。(
 * 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内
 * 某事件被触发多次，只有一次能生效。)
 * 实现方法：装饰器 + timeout
 */
const throttle = () => {

};

// 继承的 n 种方式

// EventEmitter

// 异步串行，异步并行

// 缓存函数

// 懒加载

// 数组三等分 -> lc-1013. 将数组分成和相等的三个部分

// 千位分隔符 -> https://leetcode-cn.com/problems/thousand-separator/

