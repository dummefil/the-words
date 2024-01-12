"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
var index_tsx_1 = require("./index.tsx");
var styled_components_1 = require("styled-components");
var Blank_tsx_1 = require("./Blank.tsx");
var hooks_ts_1 = require("../hooks.ts");
var react_router_dom_1 = require("react-router-dom");
var RoomWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var Room = function () {
    var _a = (0, hooks_ts_1.useAppSelector)(function (state) { return state; }), room = _a.room, player = _a.player;
    if (!room.current || !player || !player.username) {
        return (0, react_router_dom_1.redirect)('/');
    }
    var validationMove = room.current.state === ROOM_STATE.VALIDATION;
    var _b = room.current, history = _b.history, players = _b.players;
    var yourMove = true;
    // const validationMove = false;
    var anotherPlayerMove = false;
    // const player = yourMove ?  'твой ход': 'fdfdsjlf';
    var lastWord = history[history.length - 1];
    var ValidationRow = function () {
        return <>
            <index_tsx_1.Button scale={1} color={'green'}>
                Верно
            </index_tsx_1.Button>
            <index_tsx_1.Button scale={1} color={'red'}>
                Не верно
            </index_tsx_1.Button>
        </>;
    };
    var YourMoveRow = function () {
        return <>
            <index_tsx_1.Input type="text" placeholder="Введите слово"/>
            <a href="" style={{ textDecoration: 'underline', color: 'black' }}>пропустить</a>
            <index_tsx_1.Button scale={1} color={'green'}>
                Подтвердить
            </index_tsx_1.Button>
        </>;
    };
    var Text = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      text-align: center;\n      \n      font-size: ", ";\n    "], ["\n      text-align: center;\n      \n      font-size: ", ";\n    "])), function (_a) {
        var fontSize = _a.fontSize;
        if (typeof fontSize === 'number') {
            return fontSize + 'px';
        }
        return fontSize;
    });
    var AnotherPlayerMoveRow = function () {
        return <Text>Ход игрока: {player.username}</Text>;
    };
    var BottomRow = function () {
        return <index_tsx_1.CenterColumn>
            {validationMove && <ValidationRow />}
            {yourMove && <YourMoveRow />}
            {anotherPlayerMove && <AnotherPlayerMoveRow />}
        </index_tsx_1.CenterColumn>;
    };
    return <RoomWrapper>
        <div>Режим: русский</div>
        <div>Ход игрока: {player.username}</div>
        <index_tsx_1.Row>
            <Blank_tsx_1.default header={"Последние 10 слов"}>
                {history.map(function (historyEntry) { return <div>{historyEntry}</div>; })}
            </Blank_tsx_1.default>
            <Blank_tsx_1.default header={"Игроки"}>
                <index_tsx_1.Column>
                    {players.map(function (player) { return <div>{player}</div>; })}
                </index_tsx_1.Column>
            </Blank_tsx_1.default>
        </index_tsx_1.Row>
        <index_tsx_1.Row style={{ marginTop: 'auto' }}>
            <Text>последнее слово: {lastWord}</Text>
            <BottomRow />
        </index_tsx_1.Row>
    </RoomWrapper>;
};
exports.Room = Room;
var templateObject_1, templateObject_2;
