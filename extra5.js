const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}

var objKeyOne = pizza.toppings;
console.log(objKeyOne);
var objKeyTwo = pizza.crust;
console.log(objKeyTwo);
var objKeyThree = pizza.serves;
console.log(objKeyThree);

var valueObjKeyOne = objKeyOne[2];
console.log(valueObjKeyOne);