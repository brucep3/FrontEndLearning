// noinspection DuplicatedCode

/**
 * @Description
 *
 * apply, call, bind
 * - apply: func.apply(this, arguments) , 类数组
 * - call: func.call(context, …args) , 参数
 * - bind: func.bind(context, [arg1], [arg2], ...), 返回 函数 / 偏函数，绑定函数和参数
 *
 * @Author PAN Bruce
 * @Date 2021/8/2
 */

/**
 *  call 的使用: func.call(context, …args) , 参数
 *
 *  Solution: rest 参数 + symbol
 *  将函数放入对象执行再返回结果
 */
const myCall = () => {
    Function.prototype.myCall = function (context, ...args) {
        if (typeof context === "undefined" || context === null) {
            context = window;
        }

        const fn = Symbol("myCallFn");
        context[fn] = this;

        const res = context[fn](...args);
        delete context[fn];

        return res;
    };

    const testMyCall = () => {
        const obj = {
            name: "objName",
            getName: null,
        };

        function getName (middleName, lastName) {
            return this.name + ", " + middleName + ", " + lastName;
        }

        console.log(getName("123", "456"));

        console.log(getName.myCall(obj, "123", "456"));
    };

    testMyCall();
};

// myCall();

/**
 * apply 的使用: : func.apply(this, arguments) , 类数组
 *
 * Solution: rest 参数 + symbol
 * 将函数放入对象执行再返回结果
 */
const myApply = () => {
    Function.prototype.myApply = function (context, args) {
        if (typeof context === "undefined" || context === null) {
            context = window;
        }

        const fn = Symbol("myApplyFn");
        context[fn] = this;

        const res = context[fn](...args);
        delete context[fn];

        return res;
    };

    const testMyApply = () => {
        const obj = {
            name: "objName",
            getName: null,
        };

        function getName (middleName, lastName) {
            return this.name + ", " + middleName + ", " + lastName;
        }

        console.log(getName("123", "456"));

        console.log(getName.myApply(obj, ["123", "456"]));
    };

    testMyApply();
};

// myApply();

/**
 * bind: func.bind(context, [arg1], [arg2], ...) ,
 * 返回 函数 / 偏函数，绑定函数和参数
 */
const myBind = () => {
    Function.prototype.myBind = function partial (context, ...argsBound) {
        let fn = this;

        return function (...args) {
            return fn.call(this, ...argsBound, ...args);
        };
    };

    const testMyBind = () => {
        // 用法：
        let user = {
            firstName: "John",
            say (time, phrase) {
                console.log(`[${time}] ${this.firstName}: ${phrase}!`);
            },
        };

        // 添加一个带有绑定时间的 partial 方法
        user.sayNow = user.say.myBind(user,
            new Date().getHours() + ':' + new Date().getMinutes());

        user.sayNow("Hello");
        // 类似于这样的一些内容：
        // [10:00] John: Hello!
    };

    testMyBind();
};

myBind();
