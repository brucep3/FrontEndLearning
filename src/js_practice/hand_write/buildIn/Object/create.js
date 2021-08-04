/**
 * @Description
 *
 * Object.create (proto, [propertiesObject])
 *
 * @Author PAN Bruce
 * @Date 2021/8/4
 */

const test = () => {
    /**
     * Object.create polyfill
     */
    const objCretePolyfill = () => {
        if (window.Object.create instanceof Function) return;

        window.Object.create = function (proto) {
            function F () {

            }

            F.prototype = proto;

            return new F();
        };
    };

};
