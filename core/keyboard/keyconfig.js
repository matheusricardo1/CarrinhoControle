import { setupCarController } from '../controller/setup/setupControllers.js';
import { Keyboard } from './base/keyboard.js';
import { us } from './base/us-keyboard.js';

const keyboardJS = new Keyboard().setLocale('US', us);
setupCarController()

export let activeKey = {
}

function addActiveKey(name, commandClass){
    activeKey[name] = commandClass
}

export function keyBind(key='', commandClass, preventRepeatByDefault){
    window.keyBind = keyBind
    const command = new commandClass()
    command.setKeySet(key)
    addActiveKey(command.constructor.name, command)

    keyboardJS.bind(
        key, 
        () => {
            command.setButtonResponse(command.constructor.name)
            command.showKey(key)
            command.holdDebug(key)
            command.hold(key)
        },
        () => {
            command.releaseDebug(key)
            command.release(key)
            if(command.autoStopOnRelease){
                command.stopCar()
            }
            command.debugInvertControll()
            command.stopButtonResponse(command.constructor.name)
        },
        preventRepeatByDefault,
    )
}

export function holdCommand(commandClass) {
    const getActiveCommand = activeKey[commandClass.name]
    let key = getActiveCommand.keySet

    if(key.length >= 3){
        const key1 = key[0]
        const key2 = key[2]

        var holdEvent1 = new KeyboardEvent('keydown', {
            key: key1,
            keyCode: key1.charCodeAt(0),
            code: `Key${key1.toUpperCase()}`,
            which: key1.charCodeAt(0), 
            bubbles: true,  
            cancelable: true 
        });
        var holdEvent2 = new KeyboardEvent('keydown', {
            key: key2,
            keyCode: key2.charCodeAt(0),
            code: `Key${key2.toUpperCase()}`,
            which: key2.charCodeAt(0), 
            bubbles: true,  
            cancelable: true 
        });

        document.dispatchEvent(holdEvent1);
        document.dispatchEvent(holdEvent2);
    }
    else if(key.length <= 2){
        key = key[0]

        var holdEvent = new KeyboardEvent('keydown', {
            key: key,
            keyCode: key.charCodeAt(0),
            code: `Key${key.toUpperCase()}`,
            which: key.charCodeAt(0), 
            bubbles: true,  
            cancelable: true 
        });
        document.dispatchEvent(holdEvent);
    }
}

export function releaseCommand(commandClass) {
    const getActiveCommand = activeKey[commandClass.name]
    let key = getActiveCommand.keySet

    if(key.length >= 3){
        const key1 = key[0]
        const key2 = key[2]

        var releaseEvent1 = new KeyboardEvent('keyup', {
            key: key1,
            keyCode: key1.charCodeAt(0),
            code: `Key${key1.toUpperCase()}`,
            which: key1.charCodeAt(0), 
            bubbles: true,  
            cancelable: true 
        });
        var releaseEvent2 = new KeyboardEvent('keyup', {
            key: key2,
            keyCode: key2.charCodeAt(0),
            code: `Key${key2.toUpperCase()}`,
            which: key2.charCodeAt(0), 
            bubbles: true,  
            cancelable: true 
        });

        document.dispatchEvent(releaseEvent1);
        document.dispatchEvent(releaseEvent2);
    }
    else if(key.length <= 2){
        key = key[0]

        var releaseEvent = new KeyboardEvent('keyup', {
            key: key,
            keyCode: key.charCodeAt(0),
            code: `Key${key.toUpperCase()}`,
            which: key.charCodeAt(0), 
            bubbles: true,  
            cancelable: true 
        });
        document.dispatchEvent(releaseEvent);
    }


    document.dispatchEvent(releaseEvent);
}

