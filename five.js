function trafficLight(color) {
    if (color == "red") {
        return "Stop, You may have fallen in an accident";
    } else if (color == "yellow") {
        return "Step foreword carefully";
    } else if (color == "green") {
        return "You may cross the road";
    } else {
        return "You don't go there";
    }
}
var result = trafficLight("red");
console.log(result);