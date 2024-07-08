import { CarCommand } from "./keyboard/base/base.js"

export class Stop extends CarCommand{
    command = 'S'
    hold(){
        this.stop()
    }
    release(){
        this.stop()
    }
}

export class Forward extends CarCommand{
    command = 'R'
    hold(){
        this.send(this.command)
    }
}

export class Backward extends CarCommand{
    //autoStopOnRelease=false
    command = 'L'
    hold(){
        this.toggleInvertControll()
        this.send()
    }
    release(){
        this.toggleInvertControll()
    }
}

export class Right extends CarCommand{
    invertControll=true
    command = 'F'
    commandInvert = 'B'
    hold(){
        this.send()
    }
}

export class Left extends CarCommand{
    invertControll=true
    command = 'B'
    commandInvert = 'F'
    hold(){
        this.send()
    }
}

export class BackwardLeft extends CarCommand{
    invertControll=true
    command = 'G'
    commandInvert = 'I'
    
    hold(){
        this.send()
        this.toggleInvertControll()
    }
    release(){
        this.toggleInvertControll()
    }
}

export class BackwardRight extends CarCommand{
    invertControll=true
    command = 'I'
    commandInvert = 'G'
    hold(){
        this.send()
        this.toggleInvertControll()
    }
    release(){
        this.toggleInvertControll()
    }
}

export class ForwardLeft extends CarCommand{
    command = 'J'
    commandInvert = 'H'
    hold(){
        this.send()
    }

}

export class ForwardRight extends CarCommand{
    command = 'H'
    commandInvert = 'J'
    hold(){
        this.send()
    }
}
