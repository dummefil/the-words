"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCurrentRoom = exports.updateRooms = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var name = 'room';
var initialState = {
    list: null,
    current: null
};
var slice = (0, toolkit_1.createSlice)({
    name: name,
    initialState: initialState,
    reducers: {
        updateRooms: function (state, _a) {
            var payload = _a.payload;
            state.list = payload;
        },
        updateCurrentRoom: function (state, _a) {
            var payload = _a.payload;
            state.current = payload;
        }
    }
});
exports.updateRooms = (_a = slice.actions, _a.updateRooms), exports.updateCurrentRoom = _a.updateCurrentRoom;
exports.default = slice.reducer;
