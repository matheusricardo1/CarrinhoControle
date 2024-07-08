import { CarController } from "../carController.js";

export function setupCarController(invertControls, gatewayIP){
    window.car = new CarController(invertControls, gatewayIP)
    console.log(window.car)
    getCarController()
}
export function getCarController(){
    if (window.car){
        return window.car
    }else{
        return null
    }
}