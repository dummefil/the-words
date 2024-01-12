"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyles = void 0;
var styled_components_1 = require("styled-components");
var greenButtonStyles_tsx_1 = require("./greenButtonStyles.tsx");
var redButtonStyles_tsx_1 = require("./redButtonStyles.tsx");
var defaultButtonStyles_tsx_1 = require("./defaultButtonStyles.tsx");
exports.ButtonStyles = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  text-align: center;\n  border: none;\n  padding: ", ";\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  ", ""], ["\n  font-size: ", ";\n  text-align: center;\n  border: none;\n  padding: ", ";\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  ", ""])), function (_a) {
    var scale = _a.scale;
    return 16 + 2 * scale + 'px';
}, function (_a) {
    var scale = _a.scale;
    return 8 + 4 * scale + 'px';
}, function (_a) {
    var color = _a.color;
    if (color === 'green') {
        return greenButtonStyles_tsx_1.GreenButtonStyles;
    }
    if (color === 'red') {
        return redButtonStyles_tsx_1.RedButtonStyles;
    }
    return defaultButtonStyles_tsx_1.DefaultButtonStyles;
});
var templateObject_1;
