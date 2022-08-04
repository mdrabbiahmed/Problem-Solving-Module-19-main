const numbers = [14, 15.67, 16, 17.36, 18, 19, 20.75, 21];
var sum = 0;
for (var number of numbers) {
    sum += number;
}
var average = sum / numbers.length;
console.log(average);
// var result = average.toFixed(2);
// console.log(result);
// var integerResult = parseFloat(result);
// console.log(integerResult);
