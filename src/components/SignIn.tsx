import {useDispatch, useSelector} from "react-redux";
import {MainInitialState, updateAuth, updatePlayer,} from "../store/slice.main.ts";
import {Button, Form, Input, Label} from "./index.tsx";
import React, {useState} from "react";

type CheckboxProps = {
    label: string,
}

const cyrb53 = (str: string, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const Checkbox = ({ label }: CheckboxProps) => {
    let hash;
    if (label) {
        hash = '' + cyrb53(label);
    }

    const id = label ? hash : undefined;

    return <div>
        <Input type="checkbox" id={id}/>
        {label && <Label htmlFor={id}>{label}</Label>}
    </div>
}

export const SignIn = () => {
    const dispatch = useDispatch();
    const { name, password } = useSelector((state: MainInitialState) => state.player);
    const [playerName, setPlayerName  ] = useState(name);
    const [playerPassword, setPlayerPassword] = useState(password);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (playerName && playerPassword) {
            dispatch(updatePlayer({ name: playerName, password: playerPassword }))
        }
    }

    const onChangeNameChange = ({target}: React.ChangeEvent<HTMLInputElement>) => setPlayerName(target.value)
    const onChangeNamePassword = ({target}: React.ChangeEvent<HTMLInputElement>) => setPlayerPassword(target.value)

    return (
        <Form onSubmit={onSubmit}>
            <Checkbox label={"соло"} ></Checkbox>
            <Input type="text" placeholder="Введите имя" onInput={onChangeNameChange}/>
            <Input type="password" placeholder="Введите пароль" onInput={onChangeNamePassword}/>
            <Button scale={2} disabled={playerName === '' && playerPassword === ''} onClick={() => {
                dispatch(updateAuth({auth: true}))
            }}>Enter</Button>
        </Form>
    )
}
