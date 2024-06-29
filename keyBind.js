import { command } from "./carCommand.js";

export const keyBind = (car) => ({
    'w': () => car.send(command.forward),
    's': [
        () => {
            car.send(command.backward);
            car.toggleInvertControls();
            car.invertCheckCheckbox();
        },
        () => {
            car.toggleInvertControls();
            car.invertCheckCheckbox();
        }
    ],
    'a': () => car.send(command.left(car.invertControls)),
    'd': () => car.send(command.right(car.invertControls)),
    'w+a': () => car.send(command.forwardLeft(car.invertControls)),
    'w+d': () => car.send(command.forwardRight(car.invertControls)),
    's+a': () => car.send(command.backwardLeft(car.invertControls)),
    's+d': () => car.send(command.backwardRight(car.invertControls))
});
