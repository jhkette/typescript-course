interface Vehicle {
    name: string;
    year: number;
    broken: boolean;

}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}
// here we annotate printVehicle with the Vehcile interface
// this is better than doing
// (vehicle: {name: string; year: number; broken: boolean})
// instead we just use interface as a shortcut
const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Name: ${vehicle.year}`)
}