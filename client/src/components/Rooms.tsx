import Blank from "./Blank.tsx";
import styled, {css} from "styled-components";
import {Button, ButtonLink, RoomsScroll, Row} from "./index.tsx";
import {redirect} from "react-router-dom";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {serverConnect} from "../store/actions.ts";
import React from "react";

type ServerDescriptionProps = {
    selected: boolean,
}

const RoomDescription = styled.div<ServerDescriptionProps>`
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

export const Rooms = () => {
    const dispatch = useAppDispatch();
    const rooms = useAppSelector((state) => state.room.list )
    const [selectedIndex, setSelectedIndex] = useState<number>();

    const renderRooms = rooms?.map(({name, id}, i) => {
        const selected = i === selectedIndex;
        const onClick = () => setSelectedIndex(i);
        return <RoomDescription selected={selected} onClick={onClick} key={id}>{name}</RoomDescription>
    })

    const onButtonClick = () => {
        const server = rooms![selectedIndex!];
        dispatch(serverConnect(server));
        redirect('/game')
    }

    return <>
        <Blank header={'Комнаты'}>
        <RoomsScroll>
            {renderRooms}
        </RoomsScroll>
        </Blank>
        <Row>
            <Button disabled={selectedIndex === undefined}  scale={1}  color={'green'} onClick={onButtonClick}>
                Подключиться
            </Button>
            <ButtonLink to={'/create'} scale={1} color={'green'}>
                Создать
            </ButtonLink>
        </Row>
    </>
}
