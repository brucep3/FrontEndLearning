/**
 * @Description
 *
 * new
 *
 * @Author PAN Bruce
 * @Date 2021/8/2
 */

/**
 * new 的使用
 */
const newUse = () => {
    /**
     *
     * 通过 new 来 初始化对象
     *
     * 当一个函数被使用 new 操作符执行时，它按照以下步骤：
     * 1. 一个新的空对象被创建并分配给 this。
     * 2. 函数体执行。通常它会修改 this，为其添加新的属性。
     * 3. 返回 this 的值。
     * @param name
     * @constructor
     */
    function User (name) {
        // this = {}; (隐式创建)

        this.name = name;
        this.isAdmin = false;

        // return this;
    }

    let user = new User("Jack");

    console.log(user.name);
    console.log(user.isAdmin);
};

/**
 * new 的实现
 */
const newImpl = () => {
    /**
     * Solution: 原型 + 构造函数
     * @param cls
     * @param restArgs
     * @returns {newImpl}
     */
    const newImpl = function (cls, ...restArgs) {
        const newObj = Object.create(cls.prototype); // 原型

        const result = cls.apply(newObj, restArgs); // 构造函数

        return typeof result instanceof Object ? result : newObj;
    };

    const testNewImpl = () => {
        const clsUser = function User (name) {
            // this = {}; (隐式创建)

            this.name = name;
            this.isAdmin = false;

            // return this;
        };

        // test case 1
        let user = newImpl(clsUser, "Jack");
        console.log(user.name);
        console.log(user.isAdmin);

        // test case 2
        let user2 = newImpl(clsUser, "Bob");
        console.log(user2.name);
        console.log(user2.isAdmin);

    };

    testNewImpl();
};

newImpl();
