function sq(x) {
    console.log(x * x);
}
//arrow
var square = function (p) {
    console.log("square " + p * p);
    return p * p;
};
console.log(square);
square(4);
