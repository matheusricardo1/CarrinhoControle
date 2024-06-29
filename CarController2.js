
export class CarController {
    constructor(invertControls = false, gatewayIP = "192.168.4.1") {
        this.invertControls = invertControls;
        this.gatewayIP = gatewayIP;
    }

    sendCommand(command) {
        fetch(`http://${this.gatewayIP}/?State=${command}`)
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };
    invertCheckCheckbox() {
        const checkbox = document.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
    }

    toggleInvertControls() {
        this.invertControls = !this.invertControls;
        document.getElementById('invertStatus').innerText = this.invertControls ? 'ON' : 'OFF';
    };

    setInvertControls(invertControls){
        this.invertControls = invertControls;
    }
};
