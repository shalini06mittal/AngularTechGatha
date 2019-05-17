export class User{
    //data members of the class user
    /*name:string;
    city:string;
    phone:number;
    */
    constructor(private uname:string, private  city:string, private phone:string)
    {       
        this.phone = '+91-'+this.phone;
        /*this.name = uname;
        this.city = city;
        this.phone = phone;*/
    }
   //getters or accessors
   public get Name()
   {
       return this.uname;
   }
   public get City()
   {
       return this.city;
   }
   public get Phone()
   {
       return this.phone;
   }
   public set Phone(ph:string)
   {
       this.phone = '+91-'+ph;
   }
  public display():void
  {
    console.log(this.Name+" welcome here, details\n city : "+ this.City+" \nPhone "+ this.Phone);
  }
   
}
//user1 -> object
var user1 = new User('Shobha','Chennai','281732');
user1.display();
user1.Phone = '3234234';
user1.display();
//user1.phone = '8787987';
//console.log(user1.Name+" welcome here, details\n city : "+ user1.City+" \nPhone "+ user1.Phone);

export function show()
{
    console.log("show called");
}