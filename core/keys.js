import { keyBind } from "./keyboard/keyconfig.js"
import * as command from "./commands.js"

export const keys = [
    keyBind("c+p", command.Stop),
    keyBind("w", command.Forward),
    keyBind("s", command.Backward),
    keyBind("d", command.Right),
    keyBind("a", command.Left),
    keyBind("w+a", command.ForwardLeft),
    keyBind("w+d", command.ForwardRight),
    keyBind("s+a", command.BackwardLeft),
    keyBind("s+d", command.BackwardRight),
]


