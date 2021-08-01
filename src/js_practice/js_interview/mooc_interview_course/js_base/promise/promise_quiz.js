// Promise 面试题
// Ref: 8-8
// TODO: 补充

const quiz1 = () => {
    Promise.resolve().then(() => {
        console.log("1"); // 1
    }).catch(() => {
        console.log("2");
    }).then(() => {
        console.log("3"); // 3
    });
};

// quiz1();

const quiz2 = () => {

};

quiz2();

const quiz3 = () => {

};

quiz3();
