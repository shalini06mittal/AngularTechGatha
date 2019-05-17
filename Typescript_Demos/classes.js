"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    //data members of the class user
    /*name:string;
    city:string;
    phone:number;
    */
    function User(uname, city, phone) {
        this.uname = uname;
        this.city = city;
        this.phone = phone;
        this.phone = '+91-' + this.phone;
        /*this.name = uname;
        this.city = city;
        this.phone = phone;*/
    }
    Object.defineProperty(User.prototype, "Name", {
        //getters or accessors
        get: function () {
            return this.uname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "City", {
        get: function () {
            return this.city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Phone", {
        get: function () {
            return this.phone;
        },
        set: function (ph) {
            this.phone = '+91-' + ph;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.display = function () {
        console.log(this.Name + " welcome here, details\n city : " + this.City + " \nPhone " + this.Phone);
    };
    return User;
}());
exports.User = User;
//user1 -> object
var user1 = new User('Shobha', 'Chennai', '281732');
user1.display();
user1.Phone = '3234234';
user1.display();
//user1.phone = '8787987';
//console.log(user1.Name+" welcome here, details\n city : "+ user1.City+" \nPhone "+ user1.Phone);
function show() {
    console.log("show called");
}
exports.show = show;
