// noinspection DuplicatedCode

/**
 * @Description
 *
 * JavaScript 的 继承 (inheritance)
 * - extends 继承 (ES6 / ES5)
 * - 原型链继承（区别于原型式继承）
 * - 构造函数继承
 * - 组合继承
 * - 原型式继承
 * - 寄生式继承
 * - 寄生组合式继承
 *
 *
 * 参考
 * - [JavaScript深入之继承的多种方式和优缺点 · Issue #16 · mqyqingfeng/Bl
 * og](https://github.com/mqyqingfeng/Blog/issues/16)
 *
 * JavaScript 的本质：将父类的 prototype 挂在子类的 prototype 的 __proto__ 上
 *
 * @Author PAN Bruce
 * @Date 2021/8/1
 */

/**
 * extends 继承 (ES6)
 *
 * class Child extends Parent 做了什么？
 * 1. 将 Child.__proto__ 指向 Parent
 * 2. 将 Child.prototype.__proto__ 指向 Parent.prototype
 * 3. 设置 super() 调用
 *
 * 如何实现 extends 语法糖？
 * 2 + 3 : 寄生组合式继承
 * 1:
 * - new , ES1
 * - Object.create (proto, [propertiesObject]) , ES5 提供
 * - Object.setPrototypeOf(obj, prototype) 设置 __proto__ , ES 6 提供
 */
const extendsInheritance = () => {
    const es6ver = () => {
        /**
         * 父类
         */
        class Parent {
            constructor (name) {
                this.name = name;
            }

            static sayHello () {
                console.log("hello");
            }

            sayName () {
                console.log("my name is " + this.name);
                return this.name;
            }
        }

        /**
         * 子类
         */
        class Child extends Parent {
            constructor (name, age) {
                super(name);
                this.age = age;
            }

            sayAge () {
                console.log("my age is " + this.age);
                return this.age;
            }
        }

        return [Parent, Child];
    };

    // es6ver();

    const es5ver = () => {
        /**
         * 父类
         */
        function Parent (name) {
            this.name = name;
        }

        Parent.prototype.sayName = function () {
            console.log("my name is " + this.name);
            return this.name;
        };

        // 静态方法直接挂在 类下面
        Parent.sayHello = function () {
            console.log("hello");
        };

        /**
         * 子类
         * @param name
         * @param age
         * @constructor
         */
        function Child (name, age) {
            Parent.call(this, name); // super.name
            this.age = age;
        }

        /**
         * 继承
         * @param Child
         * @param Parent
         * @private
         */
        (function _inherits (Child, Parent) {
            function F () {

            }

            F.prototype = Parent.prototype;

            // 设置 Child.prototype.__proto___
            Child.prototype = new F();
            Child.prototype.constructor = Child; // 修改 prototype 的 构造函数
            Child.__proto__ = Parent; // 构造器原型链 Child.__proto__

        })(Child, Parent);

        Child.prototype.sayAge = function () {
            console.log("my age is " + this.age);
            return this.age;
        }

        return [Parent, Child];
    };

    // es5ver();

    // 测试
    const test = (Parent, Child) => {
        let parent = new Parent("Parent");
        let child = new Child("Child", 18);

        console.log("parent: ", parent); // parent:  Parent {name: "Parent"}
        Parent.sayHello(); // hello
        parent.sayName(); // my name is Parent

        console.log(" ======= \n");

        console.log("child: ", child); // child:  Child {name: "Child", age: 18}
        // Child.sayHello(); // hello
        child.sayName(); // my name is Child
        child.sayAge(); // my age is 18

        console.log(" ======= \n");

        // 1、构造器原型链
        console.log(Child.__proto__ === Parent); // true
        console.log(Parent.__proto__ === Function.prototype); // true
        console.log(Function.prototype.__proto__ === Object.prototype); // true
        console.log(Object.prototype.__proto__ === null); // true

        console.log(" ======= \n");

        // 2、实例原型链
        console.log(child.__proto__ === Child.prototype); // true
        console.log(Child.prototype.__proto__ === Parent.prototype); // true
        console.log(Parent.prototype.__proto__ === Object.prototype); // true
        console.log(Object.prototype.__proto__ === null); // true
    };

    [
        es6ver,
        es5ver,
    ].forEach(
        val => {
            console.log(` ===== Test ${val.name} ===== `);
            test(...(val()));
        },
    )
};

// extendsInheritance();

/**
 * 原型链继承
 * Solution: 父类的实例作为子类的 prototype
 * Pros: 父类方法可以复用
 * Cons: (1) 父类的引用属性会被所有子类实例共享；
 * (2) 子类构造实例时不能向父类传递参数
 */
const protoChainInheritance = () => {
    // 父类
    function Parent () {
        this.name = "kevin";
    }

    Parent.prototype.sayName = function () {
        console.log(this.name);
    }

    // 子类
    function Child () {

    }

    // 子类的 prototype : Child.prototype.__proto__ = Parent.prototype
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;

    // child1.__proto__.__proto__ = Parent.prototype
    const child1 = new Child();

    console.log(child1.sayName()); // kevin

    console.log(child1.__proto__.__proto__ === Parent.prototype);
};

// protoChainInheritance();

/**
 * 构造函数继承
 * Solution:
 * Pros:
 * Cons:
 */
const constructorInheritance = () => {

};

// 组合继承

/**
 * 原型式继承
 * 模拟 ES5 Object.create(prototype)
 * Solution: new
 * Pros: 父类方法可以复用
 * Cons: (1) 父类的引用属性会被所有子类实例共享；
 * （2）子类构建实例时不能向父类传递参数；
 */
const prototypeInheritance = () => {
    /**
     * obj.__proto__ === Parent.prototype
     * 模拟 ES5 Object.create
     * @param Parent
     * @returns {F}
     */
    function object (Parent) {
        function F () {

        }

        F.prototype = Parent;

        return new F();
    }

    const testPrototypeInheritance = () => {
        var person = {
            name: "kevin",
            friends: ["daisy", "kelly"],
        }

        var person1 = object(person);
        var person2 = object(person);

        person1.name = "person1";
        console.log(person2.name); // kevin

        person1.friends.push("taylor");
        console.log(person2.friends); // ["daisy", "kelly", "taylor"]
    };

    testPrototypeInheritance();
};

// prototypeInheritance();

// 寄生式继承

// 寄生组合式继承



