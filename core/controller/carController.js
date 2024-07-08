
export class CarController {
    gatewayIP = "192.168.4.1"
    constructor(invertControls = false, gatewayIP = "192.168.4.1") {
        this.invertControls = invertControls;
        this.gatewayIP = gatewayIP;
    }

    send(command, key='', test=false) {
        key = key.toUpperCase()
        console.log(key ? 'Digitou ' + key + ', seu comando é ' + command: 'Seu comando é ' + command)
        //console.log('Digitou ' + key + ', seu comando é ' + command)
        //console.log("192.168.4.1")
        if(!test){
            fetch(`http://192.168.4.1/?State=${command}`)
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        }
        
        
    };
    invertCheckCheckbox() {
        const checkbox = document.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
    }

    toggleInvertControls(checkbox=true, id='invertStatus') {
        this.invertControls = !this.invertControls;
        if(checkbox){
            this.invertCheckCheckbox()
        }
        document.getElementById(id).innerText = this.invertControls ? 'ON' : 'OFF';
    };

};
