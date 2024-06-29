import { CarController } from './CarController2.js';
import { command } from './commands.js'
import { Keyboard } from './js/keyboard.js'
import { us } from './js/us-keyboard.js';

const keyboardJS = new Keyboard().setLocale('US', us)
var car = new CarController(false)

let invertControls = false
car.setInvertControls(invertControls)

function sendCommand(key = '', command){
    key = key.toUpperCase()
    console.log('Digitou ' + key + ', seu comando é ' + command)
    car.sendCommand(key)
}

function toggleInvertControls(){
    const invertControl = car.invertControls;
    car.toggleInvertControls();
    return !invertControl;
} 
invertControls = toggleInvertControls()


keyboardJS.bind('w', function() {
    sendCommand('w', command.forward)
});
keyboardJS.bind('s', function() {
    sendCommand('s', command.backward)
    toggleInvertControls()
    car.invertCheckCheckbox();
}, () => {
    toggleInvertControls()
    car.invertCheckCheckbox();
});

keyboardJS.bind('a', function() {
    sendCommand('a', command.left(car.invertControls))
});
keyboardJS.bind('d', function() {
    sendCommand('d', command.right(car.invertControls))
});
keyboardJS.bind('w+a', function() {
    sendCommand('wa', command.forwardLeft(car.invertControls))
});
keyboardJS.bind('w+d', function() {
    sendCommand('wd', command.forwardRight(car.invertControls))
});
keyboardJS.bind('s+a', function() {
    sendCommand('sa', command.backwardLeft(car.invertControls))
});
keyboardJS.bind('s+d', function() {
    sendCommand('sd', command.backwardRight(car.invertControls))
});

window.car = car;  
window.command = command;  