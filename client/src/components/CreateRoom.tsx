import Blank from "./Blank.tsx";
import {ButtonLink, Column, Row} from "./index.tsx";
import {Checkbox} from "./Checkbox.tsx";

export const RoomCreate = () => {
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
