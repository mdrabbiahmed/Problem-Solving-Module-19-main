function make_avg(x, y, z) {
    var total = x + y + z;
    var average = total / 3;
    return average;
}

var result = make_avg(12, 35, 55);
console.log(result);