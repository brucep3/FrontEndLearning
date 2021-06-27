/**
 * 8. 原型，继承
 * @Description
 * @Author PAN Bruce
 * @Date 2021/5/27
 */

// 原生的原型
/**
 * 给函数添加一个 "f.defer(ms)" 方法
 */
function addDefer() {
    function f() {
        // alert("Hello!");
        console.info("Hello!")
    }

    Function.prototype.defer = function (delayTime) {
        let _this = this;
        setTimeout(_this, delayTime);
    };

    f.defer(1000); // 1 秒后显示 "Hello!"
}

// addDefer();

/**
 * 将装饰器 "defer()" 添加到函数
 */
function addDeferDecorator() {

}
