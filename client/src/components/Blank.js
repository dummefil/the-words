"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var index_tsx_1 = require("./index.tsx");
var react_1 = require("react");
var BlankWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #D9D9D9;\n  border-radius: 4px;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  margin-top: 56px;\n  gap: 8px;\n  padding: 8px;\n  overflow-y: scroll;\n"], ["\n  background: #D9D9D9;\n  border-radius: 4px;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  margin-top: 56px;\n  gap: 8px;\n  padding: 8px;\n  overflow-y: scroll;\n"])));
var Blank = function (_a) {
    var header = _a.header, children = _a.children;
    return <BlankWrapper>
        {header && <index_tsx_1.SubHeader>{header}</index_tsx_1.SubHeader>}
        <>
            {children}
        </>
    </BlankWrapper>;
};
exports.default = Blank;
var templateObject_1;
