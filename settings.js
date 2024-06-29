import { CarController } from './CarController.js';
import { Keyboard } from './js/keyboard.js';
import { us } from './js/us-keyboard.js';
import { keyBind } from './keyBind.js';

const keyboardJS = new Keyboard().setLocale('US', us);
const car = new CarController(false);

const bindings = keyBind(car);

for (const [keys, funcs] of Object.entries(bindings)) {
    if (Array.isArray(funcs)) {
        keyboardJS.bind(keys, funcs[0], funcs[1]);
    } else {
        keyboardJS.bind(keys, funcs);
    }
}

window.car = car;
