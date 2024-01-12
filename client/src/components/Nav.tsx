import { updateAuth} from "../store/slice.system.ts";
import {Block, Exit, Header, ImageStyled, NavStyled} from "./index.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ruFlag from "../assets/flag_ru.svg";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {socketDisconnect} from "../store/actions.ts";

export const Nav = () => {
    const dispatch = useAppDispatch()
    const auth : boolean= useAppSelector((state) => state.system.auth);

    const exitOnClick = () => {
        dispatch(updateAuth({auth: false}));
        dispatch(socketDisconnect())
    }

    return (
        <NavStyled>
            <Block>
                <Header>WRDS</Header>
                <ImageStyled>
                    <img src={ruFlag} alt="flag"/>
                </ImageStyled>
            </Block>
            {auth && <Exit onClick={exitOnClick}>Exit</Exit>}
        </NavStyled>
    )
}
