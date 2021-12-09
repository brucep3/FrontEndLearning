/**
 * @Description
 *
 * DOM 节点操作
 * - 获取节点
 * - property
 * - attribute
 *
 * @Author PAN Bruce
 * @Date 2021/8/5
 */

const getNode = () => {
    const div1 = document.getElementById("div1");
    console.log("div1", div1);

    const divList = document.getElementsByTagName("div"); // 集合
    console.log("divList.length", divList.length);
    console.log("divList[1]", divList[1]);

    const containerList = document.getElementsByClassName("container"); // 集合
    console.log("containerList.length", containerList.length);
    console.log("containerList[1]", containerList[1]);

    const pList = document.querySelectorAll("p");
    console.log("pList", pList);
};

// getNode();

/**
 * property 形式：修改 JS 变量
 * @constructor
 */
const DOMNodeProperty = () => {
    const pList2 = document.querySelectorAll("p");
    const p1 = pList2[0];

    p1.style.width = "100px";
    console.log(p1.style.width);
    p1.className = "red";
    console.log(p1.className);
    console.log(p1.nodeName);
    console.log(p1.nodeType); // 1
};

// DOMNodeProperty();

/**
 * attribute 形式：修改标签
 * @constructor
 */
const DOMNodeAttribute = () => {
    const pList2 = document.querySelectorAll("p");
    const p1 = pList2[0];

    p1.setAttribute("data-name", "imooc");

    console.log(p1.getAttribute("data-name"));

    p1.setAttribute("style", "font-size: 50px;");

    console.log(p1.getAttribute("style"));
};

DOMNodeAttribute();
