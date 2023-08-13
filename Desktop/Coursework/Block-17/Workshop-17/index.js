//Prompt 1.4 - connect coffee_data.js file to index.js file

const coffeeMenu = require("./coffee_data");

//Prompt 2 - Print an array of all the drinks on the menu

const printName = (item) => {
    return item.name;
};
console.log(coffeeMenu.map(printName));

//Prompt 3 - Print an array of drinks that cost 5 and under

const under5 = (item) => {
    return item.price <= 5;
}; 
const itemsUnder5 = coffeeMenu.filter(under5);
console.table(itemsUnder5);

//Prompt 4 - Print an array of all the drinks that are priced at an even number

const evenPrice = (item) => {
    return item.price % 2 === 0;
}
const itemsEven = coffeeMenu.filter(evenPrice);
console.table(itemsEven);

//Prompt 5 - Print the total if you were to order one of every drink

const totalAllDrinks = coffeeMenu.reduce(
    (accumulater, currentPrice) => accumulater + currentPrice.price,
    0
);
console.log(totalAllDrinks);

//Prompt 6 - Print an array with all the drinks that are seasonal

const seasonalDrinks = (item) => {
    return item.seasonal === true;
};
console.table(coffeeMenu.filter(seasonalDrinks)); 

//Prompt 7 - Print all the seasonal drinks with the words "with imported beans" after the item name.
//For ex. "affogato with imported beans"


const seasonalArray = coffeeMenu.filter(seasonalDrinks);
console.table(seasonalArray); 

const importedNames = seasonalArray.map(item => {
    return item.name + " with imported beans"
});
console.log(importedNames);