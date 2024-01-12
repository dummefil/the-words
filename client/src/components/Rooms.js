"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rooms = void 0;
var Blank_tsx_1 = require("./Blank.tsx");
var styled_components_1 = require("styled-components");
var index_tsx_1 = require("./index.tsx");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var hooks_ts_1 = require("../hooks.ts");
var actions_ts_1 = require("../store/actions.ts");
var RoomDescription = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  width: 100%;\n  transition: all 0.2s ease-in-out;\n  text-align: center;\n  padding: 8px;\n\n  ", "\n  &:hover {\n    background: #fce6c8;\n  }\n"], ["\n  cursor: pointer;\n  width: 100%;\n  transition: all 0.2s ease-in-out;\n  text-align: center;\n  padding: 8px;\n\n  ", "\n  &:hover {\n    background: #fce6c8;\n  }\n"])), function (_a) {
    var selected = _a.selected;
    if (selected) {
        return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background: antiquewhite;\n      "], ["\n        background: antiquewhite;\n      "])));
    }
});
var Rooms = function () {
    var dispatch = (0, hooks_ts_1.useAppDispatch)();
    var rooms = (0, hooks_ts_1.useAppSelector)(function (state) { return state.room.list; });
    var _a = (0, react_1.useState)(), selectedIndex = _a[0], setSelectedIndex = _a[1];
    var renderRooms = rooms === null || rooms === void 0 ? void 0 : rooms.map(function (_a, i) {
        var name = _a.name, id = _a.id;
        var selected = i === selectedIndex;
        var onClick = function () { return setSelectedIndex(i); };
        return <RoomDescription selected={selected} onClick={onClick} key={id}>{name}</RoomDescription>;
    });
    var onButtonClick = function () {
        var server = rooms[selectedIndex];
        dispatch((0, actions_ts_1.serverConnect)(server));
        (0, react_router_dom_1.redirect)('/game');
    };
    return <>
        <Blank_tsx_1.default header={'Комнаты'}>
        <index_tsx_1.RoomsScroll>
            {renderRooms}
        </index_tsx_1.RoomsScroll>
        </Blank_tsx_1.default>
        <index_tsx_1.Row>
            <index_tsx_1.Button disabled={selectedIndex === undefined} scale={1} color={'green'} onClick={onButtonClick}>
                Подключиться
            </index_tsx_1.Button>
            <index_tsx_1.ButtonLink to={'/create'} scale={1} color={'green'}>
                Создать
            </index_tsx_1.ButtonLink>
        </index_tsx_1.Row>
    </>;
};
exports.Rooms = Rooms;
var templateObject_1, templateObject_2;
