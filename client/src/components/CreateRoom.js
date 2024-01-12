"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomCreate = void 0;
var Blank_tsx_1 = require("./Blank.tsx");
var index_tsx_1 = require("./index.tsx");
var Checkbox_tsx_1 = require("./Checkbox.tsx");
var RoomCreate = function () {
    return <>
        <Blank_tsx_1.default header={'Создание комнаты'}>
            <index_tsx_1.Column>
                <Checkbox_tsx_1.Checkbox label={"быстрый"}/>
                <Checkbox_tsx_1.Checkbox label={"пауза"}/>
                {"язык: русский"}
            </index_tsx_1.Column>
        </Blank_tsx_1.default>
        <index_tsx_1.Row>
            <index_tsx_1.ButtonLink to={'/game'} scale={1} color={'green'}>
                Создать
            </index_tsx_1.ButtonLink>
        </index_tsx_1.Row>
    </>;
};
exports.RoomCreate = RoomCreate;
