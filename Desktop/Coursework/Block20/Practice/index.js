
class Home {
    constructor(rooms, bathrooms, squareFeet) {
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareFeet = squareFeet;
    }


getInfo () {
    return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.squareFeet} square feet,`;
    }
};

class SingleFamilyHome extends Home {
    constructor(rooms, bathrooms, squarefeet, yardSize) {
        super(rooms, bathrooms, squareFeet);
        this.yardSize = yardSize;
    }
    getInfo() {
        return `${super.getInfo()}, It has a ${this.yardSize} square foot yard `;
    }
};

