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
     *
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
