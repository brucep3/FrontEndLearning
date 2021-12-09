/**
 * @Description
 *
 * DOM 性能
 *
 * @Author PAN Bruce
 * @Date 2021/8/5
 */

/**
 * DOM 频繁操作合并为一次性操作
 */
const mergeDomOperations = () => {
    const list = document.getElementById("list");

    // 创建一个文档片段，此时还没有插入到 DOM 结构中
    const frag = document.createDocumentFragment();

    for (let i = 0; i < 20; i++) {
        const li = document.createElement("li");
        li.innerHTML = `List item ${i}`;

        // 先插入文档片段中
        frag.appendChild(li);
    }

    // 都完成之后，再统一插入到 DOM 结构中
    list.appendChild(frag);

    console.log(list);
};

mergeDomOperations();

// aaa
let a = 1;
// bbb
let b = 2;

a;
b;

