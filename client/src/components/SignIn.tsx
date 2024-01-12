import { updatePlayer,} from "../store/slice.player.ts";
import {Button, Form, Input} from "./index.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {Checkbox} from "./Checkbox.tsx";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {SOCKET} from "../../../types/events.d.ts";

export const SignIn = () => {
    const dispatch = useAppDispatch();
    const username = useAppSelector((state) => state.player.username);
    const loading = useAppSelector((state) => state.system.loading);
    const [_username, _setUsername  ] = useState(username);
    const [_password, _setPassword] = useState<string>();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (_username && _password) {
            dispatch(updatePlayer({ username: _username, password: _password }));
            dispatch({type: SOCKET.CONNECTION });
        }
    }

    const onChangeNameChange = ({target}: ChangeEvent<HTMLInputElement>) => _setUsername(target.value);
    const onChangeNamePassword = ({target}: ChangeEvent<HTMLInputElement>) => _setPassword(target.value);

    const buttonDisabled = Boolean((!_username || !_password) || ( _username && _password && loading ));

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
