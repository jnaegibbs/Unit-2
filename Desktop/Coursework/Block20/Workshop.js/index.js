//Write code that defines a constructor function called Car 
//that creates a new object with the following properties: make, model, and year
//Add a method called getDescription to the Car prototype
//which returns a string containing information about the car.

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription(){
        return '${this.year} ${this.make} ${this.model}';
    }
};

//Define the ElectricCar function as a subclass of Car. 
//Include an additional property called range that represents the range of the electric car in miles
//Override getDescription method to include range in miles per gallon

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;
    }
    getDescription(){
        return `This is a ${this.year} ${this.make} ${this.model} with a range of ${this.range} miles per gallon.`;
    } 
};

//Crate instance of ElectricCar "Tesla" "Model S" "2019" range "300"

const teslaCar = new ElectricCar ("Tesla", "Model 2", "2019", "300")
console.log(teslaCar.getDescription());