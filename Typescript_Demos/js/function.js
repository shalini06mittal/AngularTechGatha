function display(name) {
    return "Welcome " + name;
}
console.log(display('Shalini'));
function show() {
    // return "hello";
}
//optional arguments
// required
//n3 -> optional
function add(n1, n2, n3) {
    if (n3 === undefined) {
        console.log(n1 + n2);
    }
    else
        console.log(n1 + n2 + n3);
}
add(1, 2);
add(1, 2, 3);
//default arguments
function message(food, drinks) {
    if (drinks === void 0) { drinks = 'pepsi'; }
    console.log("Have this tasty " + food + " along with " + drinks);
}
message('pizza');
message('noodles', 'lemonade');
//rest parameters
function greet(company) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(names.length);
    console.log(company + " welcomes you " + names[0]);
}
greet('Techgatha');
greet('Telusko', 'shalini', 'navin', 'riya');

