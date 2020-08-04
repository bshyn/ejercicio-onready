'use strict';

const Bike = require('./class/Bike');
const Car = require('./class/Car');

function main(){
    const vehicleArr = [
        new Car('Peugeot', '206', 200000, 4),
        new Bike('Honda', 'Titan', 60000, 125),
        new Car('Peugeot', '208', 250000, 5),
        new Bike('Yamaha', 'YBR', 80500.5, 160)
    ];
    
    printExercise(vehicleArr);
}

function printExercise(vehicleArr){
    const equalsBar = "=============================";

    vehicleArr.forEach((vehicle) => {
        console.log(vehicle.toString());
    });

    console.log(equalsBar);

    let sortedByPrice = vehicleArr.sort(sortVehiclesByPrice);

    console.log(`Vehículo más caro: ${sortedByPrice[sortedByPrice.length - 1].getBrandAndModel()}`);

    console.log(`Vehículo más barato: ${sortedByPrice[0].getBrandAndModel()}`);

    let modelsWithY = findVehicleByLetter(vehicleArr, 'Y', 'model');

    console.log(`Vehículo que contiene en el modelo la letra 'Y': ${modelsWithY[0].getBrandModelAndPrice()}`);

    console.log(equalsBar);

    console.log('Vehículos ordenados por precio de mayor a menor:');
    sortedByPrice.slice().reverse().forEach((vehicle) => {
        console.log(vehicle.getBrandAndModel());
    });
}

function findVehicleByLetter(vehicleArr, letter, attribute){
    let result = vehicleArr.filter((vehicle) => 
        vehicle[attribute].includes(letter)
    );

    return result; 
}

function sortVehiclesByPrice(a, b){
    return a.price - b.price;
}

main();
