"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var index_tsx_1 = require("./index.tsx");
var cyrb53 = function (str, seed) {
    if (seed === void 0) { seed = 0; }
    var h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (var i = 0, ch = void 0; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
var Checkbox = function (_a) {
    var label = _a.label;
    var hash;
    if (label) {
        hash = '' + cyrb53(label);
    }
    var id = label ? hash : undefined;
    return <div>
        <index_tsx_1.Input type="checkbox" id={id}/>
        {label && <index_tsx_1.Label htmlFor={id}>{label}</index_tsx_1.Label>}
    </div>;
};
exports.Checkbox = Checkbox;
