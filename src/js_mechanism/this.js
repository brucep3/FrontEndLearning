/**
 * @Description
 * js 关键字 this 测试
 *
 * this 的 5 种绑定方式
 * 1. 默认绑定： 全局对象 / undefined
 *
 * 2. 隐式绑定： obj.func() , 指向 obj
 *
 * 3. 显式绑定： call / apply / bind
 *
 * 4. new 绑定
 *
 * 5. 箭头函数绑定： this的指向由外层作用域决定的
 * 箭头函数没有 this 绑定，必须通过查找作用域链来决定其值。如果箭头函数被非箭头函数包含，
 * 则 this 绑定的是最近一层非箭头函数的 this；否则，this 为 undefined。
 *
 * @Author PAN Bruce
 * @Date 2021/5/2
 */

function example () {
    let user = {};

    function sayHi () {
        console.log("Hello!");
    }

    user.sayHi = sayHi;
    user.sayHi();
}

// example();

/**
 * 对象里函数简写
 */
function methodShorthand () {
    let user = {
        sayHi () {
            console.log("Hello!");
        },
    };
    user.sayHi();
}

// methodShorthand();

/**
 * 方法中的 “this"
 */
function methodHasThis () {
    let user = {
        name: "John",
        age: 30,

        sayHi () {
            console.log(this.name);
        },
    };

    user.sayHi();
}

// methodHasThis();

/**
 * 不使用 "this"，使用对象名：变量可能会被修改
 */
function methodDontHaveThis () {
    let user = {
        name: "John",
        age: 30,

        sayHi () {
            console.log(user.name);
        },
    };

    let admin = user;
    user = null;

    admin.sayHi();
}

// methodDontHaveThis();

const quiz1 = () => {
    const name = "123";

    const obj = {
        name: "objName",
        fnA () { console.log(this); }, // fnA = function() { console.log(this); }
        fnB: () => { console.log(this); },  // fnB = () => { console.log(this);
    };

    obj.fnA(); // this? -> obj
    obj.fnB(); // this? -> window

    const { fnA, fnB } = obj;
    fnA(); // this? -> window
    fnB(); // this? -> window
};

quiz1();
