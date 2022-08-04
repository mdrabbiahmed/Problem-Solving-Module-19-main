function odd_even(input) {
    if (input % 2 == 0) {
        return "Even";
    } else if (input % 2 != 0) {
        return "Odd";
    } else {
        return "This is not an integer value";
    }
}
var result = odd_even(38);
console.log(result);