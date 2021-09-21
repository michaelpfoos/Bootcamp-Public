//Create a pizza with deep dish, traditional, mozzarella, pepperoni an sausage.
console.log(pizzaOven('deep dish', 'traditional', 'mozzarella', ['pepperoni', 'sausage']))

//create a pizza with hand tossed, marinara, mozzarella, feta, and mushrooms, olives, onions.  
console.log(pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']));

//create my pizza
console.log(pizzaOven('NY Style', 'traditional', 'mozzarella', 'Pepperoni'))

//create my wife's pizza
console.log(pizzaOven('Stuffed Crust', 'traditional', 'mozzarella', ['ham', 'pineapple']))

//Generate a random pizza
console.log(randomPizza());

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

function randomPizza() {
    let pizza = [];   
    let crusts = ['deep dish', 'stuffed crust', 'hand tossed'];
    let sauces = ['traditional', 'marinara'];
    let cheeses = ['mozzerella', 'feta'];
    let toppings = ['mushrooms', 'olives', 'onions', 'extra cheese', 'sausage', 'pepperoni'];

    //determine the crust
    //let chance = Math.floor((Math.random()) * ((crusts.length - 1) + 1)); 
    var max = crusts.length - 1;
    let chance = getRandomIntInclusive(0, max);  
    var crust = crusts[chance];

    //determine the sauce
    max = sauces.length - 1;
    chance = getRandomIntInclusive(0, max);
    var sauce = sauces[chance];

    //determine the cheeses
    max = cheeses.length - 1;
    chance = getRandomIntInclusive(0, max);
    let cheese = (chance > 1)
        ? [cheeses[0],cheeses[1]]
        : cheeses[chance];
        
    //determine the toppings
    max = toppings.length - 1;
    let number_toppings = getRandomIntInclusive(0, max);
    let topping = [];
    let evaluateChance;       
    
    for (i=0;i<number_toppings;i++) {   
        max = toppings.length - 1;        
        chance = getRandomIntInclusive(0, max);   
        evaluateChance = topping.find(e => e === toppings[chance]);      
        
        if (evaluateChance == null) {
            topping.push(toppings[chance]);             
        }
        
        if (evaluateChance != null) {
            while (evaluateChance != null) {
                max = toppings.length - 1;
                chance = getRandomIntInclusive(0, max);   
                evaluateChance = topping.find(e => e === toppings[chance]);                
    
                if (evaluateChance == null) {
                    topping.push(toppings[chance]);
                    console.log(toppings[chance]);
                }
            }
        }      
    } 

    pizza.push(crust, sauce, cheese, topping);

    return pizza;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Generates a random number between two values where both min and max are inclusive.  
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}







