"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAuth = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var name = 'auth';
exports.initialState = {
    username: undefined,
    password: undefined,
};
var slice = (0, toolkit_1.createSlice)({
    name: name,
    initialState: exports.initialState,
    reducers: {
        updateAuth: function (state, _a) {
            var payload = _a.payload;
            state.username = payload.username;
            state.password = payload.password;
        }
    },
});
exports.updateAuth = slice.actions.updateAuth;
exports.default = slice.reducer;
