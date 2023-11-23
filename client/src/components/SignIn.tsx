import { updatePlayer,} from "../store/slice.main.ts";
import {Button, Form, Input} from "./index.tsx";
import React, {useState} from "react";
import {Checkbox} from "./Checkbox.tsx";
import {useAppDispatch, useAppSelector} from "../hooks.ts";

export const SignIn = () => {
    const dispatch = useAppDispatch();
    const { user, loading } = useAppSelector((state) => state.player);
    const [playerUsername, setPlayerUsername  ] = useState(user.username);
    const [playerPassword, setPlayerPassword] = useState(user.password);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (playerUsername && playerPassword) {
            dispatch(updatePlayer({ username: playerUsername, password: playerPassword }))
            dispatch({type: 'socket/connect' })
        }
    }

    const onChangeNameChange = ({target}: React.ChangeEvent<HTMLInputElement>) => setPlayerUsername(target.value)
    const onChangeNamePassword = ({target}: React.ChangeEvent<HTMLInputElement>) => setPlayerPassword(target.value)

    const buttonDisabled = Boolean((!playerUsername || !playerPassword) || ( playerUsername && playerPassword && loading ));

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Checkbox label={"соло"} ></Checkbox>
                <Input type="text" placeholder="Введите имя" onInput={onChangeNameChange}/>
                <Input type="password" placeholder="Введите пароль" onInput={onChangeNamePassword}/>
                <Button scale={2} disabled={buttonDisabled}>{ loading ? 'Ожидайте...' : 'Войти' }</Button>
            </Form>
        </>
    )
}
