"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setError = exports.updateLoading = exports.updateAuth = exports.initialState = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var name = 'system';
exports.initialState = {
    auth: false,
    loading: false,
    error: null
};
var slice = (0, toolkit_1.createSlice)({
    name: name,
    initialState: exports.initialState,
    reducers: {
        updateAuth: function (state, _a) {
            var payload = _a.payload;
            state.auth = payload.auth;
        },
        updateLoading: function (state, _a) {
            var payload = _a.payload;
            state.loading = payload;
        },
        setError: function (state, _a) {
            var payload = _a.payload;
            state.error = payload;
        }
    },
});
exports.updateAuth = (_a = slice.actions, _a.updateAuth), exports.updateLoading = _a.updateLoading, exports.setError = _a.setError;
exports.default = slice.reducer;
