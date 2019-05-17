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
    return User;
}());
//user1 -> object
var user1 = new User('Shobha', 'Chennai', '281732');
console.log(user1.Name + " welcome here, details\n city : " + user1.City + " \nPhone " + user1.Phone);
user1.Phone = '3234234';
console.log(user1.Name + " welcome here, details\n city : " + user1.City + " \nPhone " + user1.Phone);
