import {Button, CenterColumn, Column, Input, Row} from "./index.tsx";
import styled from "styled-components";
import Blank from "./Blank.tsx";
import {useAppSelector} from "../hooks.ts";
import {redirect} from "react-router-dom";

const RoomWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const Room = () => {
    const { room, player } = useAppSelector(state => state);
    if (!room.current || !player || !player.username) {
        return redirect('/');
    }

    const validationMove = room.current.state === ROOM_STATE.VALIDATION;
    const { history, players } = room.current;
    const yourMove = true;
    // const validationMove = false;
    const anotherPlayerMove = false;
    // const player = yourMove ?  'твой ход': 'fdfdsjlf';
    const lastWord = history[history.length - 1];

    const ValidationRow = () => {
        return <>
            <Button scale={1} color={'green'}>
                Верно
            </Button>
            <Button scale={1} color={'red'}>
                Не верно
            </Button>
        </>
    }

    const YourMoveRow = () => {
        return <>
            <Input type="text" placeholder="Введите слово"/>
            <a href="" style={{textDecoration: 'underline', color: 'black'}}>пропустить</a>
            <Button scale={1} color={'green'}>
                Подтвердить
            </Button>
        </>
    }

    type TextProps = {
        fontSize?: string | number
    }

    const Text = styled.p<TextProps>`
      text-align: center;
      
      font-size: ${({ fontSize  }) => {
        if (typeof fontSize === 'number') {
            return fontSize + 'px';
        }
        return fontSize;
    }};
    `

    const AnotherPlayerMoveRow = () => {
        return <Text>Ход игрока: {player.username}</Text>
    }

    const BottomRow = () => {
        return <CenterColumn>
            { validationMove && <ValidationRow/>}
            { yourMove &&  <YourMoveRow/>}
            { anotherPlayerMove && <AnotherPlayerMoveRow/>}
        </CenterColumn>
    }

    return <RoomWrapper>
        <div>Режим: русский</div>
        <div>Ход игрока: {player.username}</div>
        <Row>
            <Blank header={"Последние 10 слов"}>
                {history.map((historyEntry) => <div>{historyEntry}</div>)}
            </Blank>
            <Blank header={"Игроки"}>
                <Column>
                    {players.map((player) => <div>{player}</div>)}
                </Column>
            </Blank>
        </Row>
        <Row style={{marginTop: 'auto'}}>
            <Text>последнее слово: {lastWord}</Text>
            <BottomRow/>
        </Row>
    </RoomWrapper>
}
