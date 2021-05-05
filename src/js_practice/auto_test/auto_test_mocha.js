/**
 * @Description 自动化测试练习
 * @Author PAN Bruce
 * @Date 2021/5/1
 */


/**
 * 函数的spec（规范）：用例的描述和针对用例的测试
 */
describe("pow", function () {

    // 描述特定用例，以及对其进行测试的函数
    it("2 raises to power 3 is 8",
        function () {
            // 检查pow函数是否按照预期工作
            assert.equal(pow(2, 3), 8);
        });

    it("3 raises to power 4 is 81",
        function () {
            // 检查pow函数是否按照预期工作
            assert.equal(pow(3, 4), 81);
        });
});