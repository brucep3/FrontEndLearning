/**
 * @Description js 关键字 this 测试
 * @Author PAN Bruce
 * @Date 2021/5/2
 */


function example() {
    let user = {};

    function sayHi() {
        console.log("Hello!")
    }

    user.sayHi = sayHi;
    user.sayHi();
}

example();

/**
 * 对象里函数简写
 */
function methodShorthand() {
    let user = {
        sayHi() {
            console.log("Hello!")
        }
    }
    user.sayHi();
}

methodShorthand();

/**
 * 方法中的 “this"
 */
function methodHasThis() {
    let user = {
        name: "John",
        age: 30,

        sayHi() {
            console.log(this.name);
        }
    }

    user.sayHi();
}

methodHasThis();

/**
 * 不使用 "this"，使用对象名：变量可能会被修改
 */
function methodDontHaveThis() {
    let user = {
        name: "John",
        age: 30,

        sayHi() {
            console.log(user.name);
        }
    };

    let admin = user;
    user = null;

    admin.sayHi();
}

// methodDontHaveThis();