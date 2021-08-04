/**
 * @Description
 *
 * JavaScript 的面向对象
 * - 类 和 实例 的关系
 *
 * @Author PAN Bruce
 * @Date 2021/8/4
 */

/**
 * JavaScript 类 和 实例 的关系
 */
const testClassAndObj = () => {
    function F () {}

    const f = new F();

    // 构造器 是函数本身
    console.log(F.prototype.constructor === F); // true
    // 具体的函数是 内置 Function 的实例
    console.log(F.__proto__ === Function.prototype); // true
    // Function 是 Object 的实例
    console.log(Function.prototype.__proto__ === Object.prototype); // true
    // 原型链的尽头是 null
    console.log(Object.prototype.__proto__ === null); // true

    // 实例
    console.log(f.__proto__ === F.prototype); // true
    console.log(F.prototype.__proto__ === Object.prototype); // true
    console.log(Object.prototype.__proto__ === null); // true
};

testClassAndObj();
