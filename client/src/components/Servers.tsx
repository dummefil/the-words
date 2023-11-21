import Blank from "./Blank.tsx";
import styled, {css} from "styled-components";
import {Button, ButtonLink, CenterColumn, Column, Input, RoomsScroll, Row} from "./index.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {Checkbox} from "./Checkbox.tsx";
import {useDispatch} from "react-redux";

type ServerDescriptionProps = {
    selected: boolean,
}
const ServerDescription = styled.div<ServerDescriptionProps>`
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease-in-out;
  text-align: center;
  padding: 8px;

  ${({selected}) => {
    if (selected) {
      return css`
        background: antiquewhite;
      `
    }
  }}
  &:hover {
    background: #fce6c8;
  }
`

const Rooms = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'socket/connect'})
        return () => {
            dispatch({type: 'socket/disconnect'})
        }
    })

    const [selectedIndex, setSelectedIndex] = useState<number>();

    const servers = [
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
        { mode: 'text', name: 'server', lang: 'ru' },
    ]

    return <>
        <Blank header={'Комнаты'}>
        <RoomsScroll>
            {servers.map((server, i) => {
                    const selected = i === selectedIndex;
                    const key = server.name + i;
                    const name = server.name + ' ' + i;
                    const onClick = () => setSelectedIndex(i);
                    return <ServerDescription selected={selected} onClick={onClick} key={key}>{name}</ServerDescription>
                })
            }
        </RoomsScroll>
        </Blank>
        <Row>
            <Button scale={1} color={'green'}>
                Подключиться
            </Button>
            <ButtonLink to={'/create'} scale={1} color={'green'}>
                Создать
            </ButtonLink>
        </Row>
        </>
}

const RoomCreate = () => {
    return <>
        <Blank header={'Создание комнаты'} >
            <Column>
                <Checkbox label={"быстрый"}/>
                <Checkbox label={"пауза"}/>
                {"язык: русский"}
            </Column>
        </Blank>
        <Row>
            <ButtonLink to={'/game'} scale={1} color={'green'}>
                Создать
            </ButtonLink>
        </Row >
    </>
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Game = () => {
    const yourMove = true;
    const validationMove = false;
    const anotherPlayerMove = false;
    const player = yourMove ?  'твой ход': 'fdfdsjlf';
    const lastWords = [
        'пенис',
        'сука',
        'альфа',
        'альфацентавра',
        'аскет',
        'тирамиссу',
    ];
    const lastWord = 'бабабой';
    const players = [
        {
            name: 'пенис', score: 1
        },
        {
            name: 'сука', score: 3
        },
        {
            name: 'альфа', score: 4
        },
        {
            name: 'залупа', score: 99
        },
        {
            name: 'хуесос', score: 1
        }
    ]

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
           return <Text>Ход игрока: {player}</Text>
    }

    const BottomRow = () => {
        return <CenterColumn>
                { validationMove && <ValidationRow/>}
                { yourMove &&  <YourMoveRow/>}
                { anotherPlayerMove && <AnotherPlayerMoveRow/>}
            </CenterColumn>
    }

    return <Wrapper>
        <div>Режим: быстрый, русский</div>
        <div>Ход игрока: {player}</div>
        <Row>
            <Blank header={"Последние 10 слов"}>
                {lastWords.map((lastWord) => <div>{lastWord}</div>)}
            </Blank>
            <Blank header={"Игроки"}>
                <Column>
                    {players.map((p) => <div>{p.name + ' - ' + p.score}</div>)}
                </Column>
            </Blank>
        </Row>
        <Row style={{marginTop: 'auto'}}>
            <Text>слово: {lastWord}</Text>
            <BottomRow/>
        </Row>
    </Wrapper>
}

export const ServersRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Rooms />} />
            <Route path="/create" element={<RoomCreate />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
