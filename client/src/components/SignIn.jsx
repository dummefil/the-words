"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = void 0;
var slice_player_ts_1 = require("../store/slice.player.ts");
var index_tsx_1 = require("./index.tsx");
var react_1 = require("react");
var Checkbox_tsx_1 = require("./Checkbox.tsx");
var hooks_ts_1 = require("../hooks.ts");
var events_d_ts_1 = require("../../../events.d.ts");
var SignIn = function () {
    var dispatch = (0, hooks_ts_1.useAppDispatch)();
    var username = (0, hooks_ts_1.useAppSelector)(function (state) { return state.player.username; });
    var loading = (0, hooks_ts_1.useAppSelector)(function (state) { return state.system.loading; });
    var _a = (0, react_1.useState)(username), _username = _a[0], _setUsername = _a[1];
    var _b = (0, react_1.useState)(), _password = _b[0], _setPassword = _b[1];
    var onSubmit = function (event) {
        event.preventDefault();
        if (_username && _password) {
            dispatch((0, slice_player_ts_1.updatePlayer)({ username: _username, password: _password }));
            dispatch({ type: events_d_ts_1.SOCKET.CONNECTION });
        }
    };
    var onChangeNameChange = function (_a) {
        var target = _a.target;
        return _setUsername(target.value);
    };
    var onChangeNamePassword = function (_a) {
        var target = _a.target;
        return _setPassword(target.value);
    };
    var buttonDisabled = Boolean((!_username || !_password) || (_username && _password && loading));
    return (<>
            <index_tsx_1.Form onSubmit={onSubmit}>
                <Checkbox_tsx_1.Checkbox label={"соло"}></Checkbox_tsx_1.Checkbox>
                <index_tsx_1.Input type="text" placeholder="Введите имя" onInput={onChangeNameChange}/>
                <index_tsx_1.Input type="password" placeholder="Введите пароль" onInput={onChangeNamePassword}/>
                <index_tsx_1.Button scale={2} disabled={buttonDisabled}>{loading ? 'Ожидайте...' : 'Войти'}</index_tsx_1.Button>
            </index_tsx_1.Form>
        </>);
};
exports.SignIn = SignIn;
