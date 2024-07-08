import { getCarController } from "../../controller/setup/setupControllers.js"


export class Command{
    invertControll=false
    debug=false
    show=false
    keySet=''

    setKeySet(key){
        if(key.length == 2){
            this.keySet = [key[0].toUpperCase()]
        }else if(key.length >= 3){
            this.keySet = [key[0].toUpperCase(), key[2].toUpperCase()]
        }else{
            this.keySet = [key.toUpperCase()]
        }
    }

    getKeySet(){
        return keySet
    }

    send(){
        console.log("Send() >>> não executa nada")
    }

    showKey(key){
        if(this.show && !this.debug){
            console.log('\x1b[36m%s\x1b[0m', "Key: " + key.toUpperCase())
        }
    }

    holdDebug(key){
        if(this.debug){
            console.log('\x1b[34m%s\x1b[0m', '----------------');
            console.log("Hold: " + key.toUpperCase())
        }
    }

    releaseDebug(key){
        if(this.debug){ 
            console.log("Release: " + key.toUpperCase())
        }
    }

    hold(key){
        if(this.debug){
            console.log("Hold: "+key.toUpperCase()+" não executa nada")
        }
    }

    release(key){
        if(this.debug){
            console.log("Release: "+key.toUpperCase()+" não executa nada")
        }
    }

}

export class CarCommand extends Command{
    responseButtonId=''
    autoStopOnRelease=true
    commandInvert=''
    car=getCarController()
    sendCommand = car.send

    setButtonResponse(commandName){
        commandName = commandName.toLowerCase()
        try{
            const botao = document.getElementById(this.responseButtonId);
            botao.classList.add('button-active');
        }catch{
            try{
                const botao = document.getElementById("btn-"+commandName);
                botao.classList.add('button-active');
            }catch{
                try{
                    const botao = document.getElementById("button-"+commandName);
                    botao.classList.add('button-active');
                }catch{
                    return null
                }
            }
        }
    }
    stopButtonResponse(commandName){
        commandName = commandName.toLowerCase()
        console.log(commandName)
        try{
            const botao = document.getElementById(this.responseButtonId);
            botao.classList.remove('button-active');
        }catch{
            try{
                const botao = document.getElementById("btn-"+commandName);
                botao.classList.remove('button-active');
            }catch{
                try{
                    const botao = document.getElementById("button-"+commandName);
                    botao.classList.remove('button-active');
                }catch{
                    return null
                }
            }
        }
    }

    send(){
        if(this.invertControll && this.commandInvert!='' && this.car.invertControls){
            this.sendCommand(this.commandInvert)
        }else{
            this.sendCommand(this.command)
        }
    }

    debugInvertControll(){
        if (this.invertControll){
            if(this.debug){
                console.log("Com Inversão de Controle")
            }
        }else{
            if(this.debug){
                console.log("Sem Inversão de Controle")
            }
        }
    }   

    toggleInvertControll(){
        this.debugInvertControll()
        this.car.toggleInvertControls()
        if(this.debug){
            console.log("Controle Invertido")
        }
    }   

    stopCar(){
        this.sendCommand('S')
    }
}