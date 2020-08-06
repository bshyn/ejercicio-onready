'use strict';

class Vehicle{

    constructor(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    
    isDeluxe(){
        return false;
    }

    toString(){
        return `Marca: ${this.brand} // Modelo: ${this.model} // Precio: $${this.getFormattedPrice()}`;
    }

    getBrandAndModel(){
        return `${this.brand} ${this.model}`;
    }

    getBrandModelAndPrice(){
        return `${this.brand} ${this.model} $${this.getFormattedPrice()}`
    }

    getFormattedPrice(){
        // Primer RegEx cambia los separadores de miles a puntos, el segundo separador de decimales a coma
        return this.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.').replace(/\.(?=((.{2})\s*$))/, ',');
    }

}

module.exports = Vehicle;
