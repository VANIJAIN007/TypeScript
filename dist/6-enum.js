"use strict";
var directions;
(function (directions) {
    directions[directions["north"] = 11] = "north";
    directions[directions["east"] = 22] = "east";
    directions[directions["west"] = 33] = "west";
    directions[directions["south"] = 34] = "south";
})(directions || (directions = {}));
console.log(directions.south);
var directions1;
(function (directions1) {
    directions1["north"] = "North";
    directions1["east"] = "East";
})(directions1 || (directions1 = {}));
console.log(directions1.east);
