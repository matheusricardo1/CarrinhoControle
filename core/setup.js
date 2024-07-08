import * as command from './commands.js'
import { holdCommand, releaseCommand } from './keyboard/keyconfig.js'
import { keys } from './keys.js'

window.holdCommand = holdCommand
window.releaseCommand = releaseCommand
window.command = command
window.keys = keys


