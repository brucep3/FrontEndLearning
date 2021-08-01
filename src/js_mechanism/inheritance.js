/**
 * @Description
 *
 * JavaScript 的继承
 * - 原型链继承
 * - 构造函数继承
 * - 组合继承
 * - 原型式继承
 * - 寄生式继承
 * - 寄生组合式继承
 *
 * 参考
 * - [JavaScript深入之继承的多种方式和优缺点 · Issue #16 · mqyqingfeng/Bl
 * og](https://github.com/mqyqingfeng/Blog/issues/16)
 *
 * @Author PAN Bruce
 * @Date 2021/8/1
 */

// 原型链继承
const prototypeChainInheritance = () => {
    function Parent () {
        this.name = "kevin";
    }

    Parent.prototype.getName = function () {
        console.log(this.name);
    }

    function Child () {

    }

    Child.prototype = new Parent();

    const child1 = new Child();

    console.log(child1.getName()) // kevin
};

prototypeChainInheritance();

// 构造函数继承

// 组合继承

// 原型式继承

// 寄生式继承

// 寄生组合式继承

// extends (ES6)

