/**
 * 3 个函数
 * - updateView() : 触发更新视图
 * - observe(target) : 监听 target 的属性，target 属性变化后会触发更新视图操作
 * - defineReactive(target, key, value) : 核心函数，实现属性监听
 * 响应式原理的三个版本
 * - 监听对象：监听第 1 层
 * - 深度监听：可以监听 obj1.obj2....objn.val
 * - 监听数组操作：
 */

/**
 * 触发更新视图
 */
function updateView() {
    console.log('视图更新')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype
// 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
    arrProto[methodName] = function () {
        updateView() // 触发视图更新
        oldArrayProperty[methodName].call(this, ...arguments)
        // Array.prototype.push.call(this, ...arguments)
    }
});

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
    // 深度监听
    observer(value);

    // 核心 API
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (newValue !== value) {
                // 深度监听
                observer(newValue);

                // 设置新值
                // 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值
                value = newValue;

                // 触发更新视图
                updateView();
            }
        }
    });
}

/**
 * 监听对象 target 的属性
 * @param target
 * @returns {*}
 */
function observer(target) {
    if (typeof target !== 'object' || target === null) {
        // 不是对象或数组
        return target;
    }

    // 污染全局的 Array 原型
    // Array.prototype.push = function () {
    //     updateView()
    //     ...
    // }

    if (Array.isArray(target)) {
        target.__proto__ = arrProto;
    }

    // 重新定义各个属性（for in 也可以遍历数组）
    for (let key in target) {
        defineReactive(target, key, target[key]);
    }
}

// 准备数据
const data = {
    name: 'zhangsan',
    age: 20,
    info: {
        address: '北京' // 需要深度监听
    },
    nums: [10, 20, 30]
}

// 监听数据
observer(data)

// 测试
// data.name = 'lisi'
// data.age = 21
// // console.log('age', data.age)
// data.x = '100' // 新增属性，监听不到 —— 所以有 Vue.set
// delete data.name // 删除属性，监听不到 —— 所有已 Vue.delete
// data.info.address = '上海' // 深度监听
data.nums.push(4) // 监听数组
