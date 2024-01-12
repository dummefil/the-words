"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
var slice_system_ts_1 = require("../store/slice.system.ts");
var index_tsx_1 = require("./index.tsx");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
var flag_ru_svg_1 = require("../assets/flag_ru.svg");
var hooks_ts_1 = require("../hooks.ts");
var actions_ts_1 = require("../store/actions.ts");
var Nav = function () {
    var dispatch = (0, hooks_ts_1.useAppDispatch)();
    var auth = (0, hooks_ts_1.useAppSelector)(function (state) { return state.system.auth; });
    var exitOnClick = function () {
        dispatch((0, slice_system_ts_1.updateAuth)({ auth: false }));
        dispatch((0, actions_ts_1.socketDisconnect)());
    };
    return (<index_tsx_1.NavStyled>
            <index_tsx_1.Block>
                <index_tsx_1.Header>WRDS</index_tsx_1.Header>
                <index_tsx_1.ImageStyled>
                    <img src={flag_ru_svg_1.default} alt="flag"/>
                </index_tsx_1.ImageStyled>
            </index_tsx_1.Block>
            {auth && <index_tsx_1.Exit onClick={exitOnClick}>Exit</index_tsx_1.Exit>}
        </index_tsx_1.NavStyled>);
};
exports.Nav = Nav;
