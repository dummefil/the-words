"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./reset.css");
var components_1 = require("./components");
var SignIn_tsx_1 = require("./components/SignIn.tsx");
var Nav_tsx_1 = require("./components/Nav.tsx");
var Rooms_tsx_1 = require("./components/Rooms.tsx");
var hooks_ts_1 = require("./hooks.ts");
var Toast_tsx_1 = require("./components/Toast.tsx");
function App() {
    var _a = (0, hooks_ts_1.useAppSelector)(function (state) { return state.system; }), auth = _a.auth, error = _a.error;
    return (<components_1.Container>
        <Nav_tsx_1.Nav />
        {!auth && <SignIn_tsx_1.SignIn />}
        {auth && <Rooms_tsx_1.ServersRouter />}
        {error && <Toast_tsx_1.default position={"bottom right"} data={error} type={'error'}></Toast_tsx_1.default>}
    </components_1.Container>);
}
exports.default = App;
