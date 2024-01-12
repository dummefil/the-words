"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var react_router_dom_1 = require("react-router-dom");
var CreateRoom_tsx_1 = require("../CreateRoom.tsx");
var Rooms_tsx_1 = require("../Rooms.tsx");
var Room_tsx_1 = require("../Room.tsx");
var Router = function () {
    return (<react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<Rooms_tsx_1.Rooms />}/>
            <react_router_dom_1.Route path="/create" element={<CreateRoom_tsx_1.RoomCreate />}/>
            <react_router_dom_1.Route path="/game" element={<Room_tsx_1.Room />}/>
            <react_router_dom_1.Route path="*" element={<react_router_dom_1.Navigate to="/" replace/>}/>
        </react_router_dom_1.Routes>);
};
exports.Router = Router;
