// 异步 （callback 回调函数）
// noinspection DuplicatedCode

const asyncDemo = () => {
    console.log(100);

    setTimeout(() => {
        console.log(200);
    }, 1000);

    console.log(300);
    console.log(400);
    console.log("\n");
};

// 同步
const syncDemo = () => {
    console.log(100);
    // alert(200);
    console.log(200);
    console.log(300);
    console.log("\n");
};

syncDemo();
asyncDemo();


