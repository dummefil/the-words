import { updateAuth} from "../store/slice.system.ts";
import {Block, Exit, Header, ImageStyled, NavStyled} from "./index.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ruFlag from "../assets/flag_ru.svg";
import {useAppDispatch, useAppSelector} from "../hooks.ts";

export const Nav = () => {
    const dispatch = useAppDispatch()
    const auth = useAppSelector((state) => state.system.auth);
    return (
        <NavStyled>
            <Block>
                <Header>WRDS</Header>
                <ImageStyled>
                    <img src={ruFlag} alt="flag"/>
                </ImageStyled>
            </Block>
            {auth as boolean && <Exit onClick={() => dispatch(updateAuth({auth: false}))}>Exit</Exit>}
        </NavStyled>
    )
}
