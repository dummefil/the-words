import {useDispatch, useSelector} from "react-redux";
import {authorize, MainInitialState, updatePlayer,} from "../store/slice.main.ts";
import {Button, Form, Input} from "./index.tsx";
import React, {useState} from "react";
import {Checkbox} from "./Checkbox.tsx";

export const SignIn = () => {
    const dispatch = useDispatch();
    const { player, loading, error } = useSelector((state: MainInitialState) => state);
    const [playerName, setPlayerName  ] = useState(player.name);
    const [playerPassword, setPlayerPassword] = useState(player.password);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (playerName && playerPassword) {
            dispatch(updatePlayer({ name: playerName, password: playerPassword }))
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            dispatch(authorize())
        }
    }

    const onChangeNameChange = ({target}: React.ChangeEvent<HTMLInputElement>) => setPlayerName(target.value)
    const onChangeNamePassword = ({target}: React.ChangeEvent<HTMLInputElement>) => setPlayerPassword(target.value)

    const buttonDisabled = Boolean((!playerName && !playerPassword) || ( playerName && playerPassword && loading ));

    return (
        <Form onSubmit={onSubmit}>
            { error && <div>{error.toString()}</div> }
            <Checkbox label={"соло"} ></Checkbox>
            <Input type="text" placeholder="Введите имя" onInput={onChangeNameChange}/>
            <Input type="password" placeholder="Введите пароль" onInput={onChangeNamePassword}/>
            <Button scale={2} disabled={buttonDisabled}>{ loading ? 'Ожидайте...' : 'Войти' }</Button>
        </Form>
    )
}
