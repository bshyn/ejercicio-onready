'use strict';

const Car = require('./Car');

class ElectricCar extends Car{
    constructor(brand, model, price, doors, voltage){
        super(brand, model, price, doors);
        this.voltage = voltage;
    }

    toString(){
        return `${super.toString()} // Voltaje: ${this.voltage}V`;
    }

    isDeluxe(){
        return true;
    }

}

module.exports = ElectricCar;