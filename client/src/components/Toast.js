"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var react_1 = require("react");
var slice_system_ts_1 = require("../store/slice.system.ts");
var hooks_1 = require("../hooks");
// Define the fade-in and slide-in animation
var fadeInAndSlideDown = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% { opacity: 0; transform: translateY(-100%); }\n  100% { opacity: 1; transform: translateY(0); }\n"], ["\n  0% { opacity: 0; transform: translateY(-100%); }\n  100% { opacity: 1; transform: translateY(0); }\n"])));
var fadeOutAndSlideUp = (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% { opacity: 1; transform: translateY(0); }\n  100% { opacity: 0; transform: translateY(-100%); }\n"], ["\n  0% { opacity: 1; transform: translateY(0); }\n  100% { opacity: 0; transform: translateY(-100%); }\n"])));
//todo fix bottom center && top center
var getPosition = function (string) {
    if (string === void 0) { string = 'bottom'; }
    switch (string) {
        case 'bottom left':
            return {
                bottom: 0,
                left: 0,
            };
        case 'bottom right':
            return {
                bottom: 0,
                right: 0,
            };
        case 'top right':
            return {
                top: 0,
                right: 0,
            };
        case 'top left':
            return {
                top: 0,
                left: 0,
            };
        case 'bottom center':
            return {
                bottom: 0
            };
        case 'top center':
            return {
                top: 0
            };
    }
};
var Wrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  animation: ", " 0.5s ease-out forwards;\n  ", "\n  ", "\n"], ["\n  position: absolute;\n  animation: ", " 0.5s ease-out forwards;\n  ", "\n  ", "\n"])), function (_a) {
    var show = _a.show;
    return (show ? fadeInAndSlideDown : fadeOutAndSlideUp);
}, function (_a) {
    var position = _a.position;
    return getPosition(position);
}, function (_a) {
    var type = _a.type;
    if (type === 'error') {
        return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            border-radius: 12px;\n            background: red;\n            color: white;\n            padding: 12px 16px;\n            margin: 16px;\n          "], ["\n            border-radius: 12px;\n            background: red;\n            color: white;\n            padding: 12px 16px;\n            margin: 16px;\n          "])));
    }
});
var Toast = function (_a) {
    var position = _a.position, data = _a.data, _b = _a.type, type = _b === void 0 ? 'plain' : _b;
    var dispatch = (0, hooks_1.useAppDispatch)();
    var _c = (0, react_1.useState)({}), localData = _c[0], setLocalData = _c[1];
    var _d = (0, react_1.useState)(true), showToast = _d[0], setShowToast = _d[1];
    (0, react_1.useEffect)(function () {
        var timer = setTimeout(function () {
            setShowToast(false);
        }, 2500); // Duration after which the toast will disappear
        return function () { return clearTimeout(timer); };
    }, []);
    var timeoutFunction = (0, react_1.useCallback)(function () {
        dispatch((0, slice_system_ts_1.setError)(null));
    }, [dispatch]);
    (0, react_1.useEffect)(function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setLocalData(data);
        var timeoutId = setTimeout(timeoutFunction, 3000);
        return function () { return clearTimeout(timeoutId); };
    }, [data, timeoutFunction]);
    return <Wrapper show={showToast} position={position} type={type}>
        {localData === null || localData === void 0 ? void 0 : localData.toString()}
    </Wrapper>;
};
exports.default = Toast;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
