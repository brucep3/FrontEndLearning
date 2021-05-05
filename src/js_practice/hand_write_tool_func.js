/**
 * @Description 手撕代码：常见工具方法实现（jQuery, lodash）
 * @Author PAN Bruce
 * @Date 2021/5/1
 */


/**
 * 深拷贝数组/对象：通过 spread
 * @param {Object | []} obj
 * @returns {Object}
 */
function deepCopy(obj) {
    if (isArray(obj)) {
        return deepCopyArr(obj);
    }
    return deepCopyObj(obj);

    /**
     * 深拷贝数组
     * @param arr
     * @returns {*[]}
     */
    function deepCopyArr(arr) {
        return [...arr];
    }

    /**
     * 深拷贝对象
     * @param obj
     * @returns {*}
     */
    function deepCopyObj(obj) {
        return {...obj};
    }
}

/**
 * 判断变量是否为数组的4种方式
 * @param arr
 * @returns {boolean}
 */
function isArray(arr) {
    return Array.isArray(arr);
}

