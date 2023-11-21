import {Input, Label} from "./index.tsx";

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
export const Checkbox = ({label}: CheckboxProps) => {
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
