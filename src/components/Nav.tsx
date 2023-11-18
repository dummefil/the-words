import {useDispatch, useSelector} from "react-redux";
import {MainInitialState, updateAuth} from "../store/slice.main.ts";
import {Block, Exit, Header, ImageStyled, NavStyled} from "./index.tsx";
import ruFlag from "../assets/flag_ru.svg";

export const Nav = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state: MainInitialState) => state.auth);
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
