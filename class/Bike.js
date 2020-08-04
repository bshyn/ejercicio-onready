'use strict';

const Vehicle = require('./Vehicle');

class Bike extends Vehicle{
    
    constructor(brand, model, price, displacement){
        super(brand, model, price);
        this.displacement = displacement;
    }

    toString(){
        return `Marca: ${this.brand} // Modelo: ${this.model} // Cilindrada: ${this.displacement}c // Precio: $${this.getFormattedPrice()}`;
    }
}

module.exports = Bike;
