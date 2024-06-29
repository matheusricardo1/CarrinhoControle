export const command = {
    stopCar: "S",
    forward: "R",
    backward: "L",
    left: (invertControls = false) => {
        return invertControls ? 'B' : 'F';
    },
    right: (invertControls = false) => {
        return invertControls ? 'F' : 'B';
    },

    forwardLeft: (invertControls = false) => {
        return invertControls ? 'G' : 'I';
    },
    forwardRight: (invertControls = false) => {
        return invertControls ? 'I' : 'G';
    },

    backwardLeft: (invertControls = false) => {
        return invertControls ? 'H' : 'J';
    },
    backwardRight: (invertControls = false) => {
        return invertControls ? 'J' : 'H';
    },

};