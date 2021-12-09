const quiz1 = () => {
    // var i = undefiend;
    for (var i = 0; i < 6; i++) {
        // 块级作用域
        !(function () {
            var j = i;
            setTimeout(function () {
                console.log(j);
            });
        })(); // for ... setTimeout问题其实有蛮多知识点可以问，需要结合所学所用灵活变通。
    }
};

quiz1();
