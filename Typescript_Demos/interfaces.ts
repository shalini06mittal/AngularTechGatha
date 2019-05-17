interface Person{
    name:string,
    phone?:number
}
function displaydetails(person:Person)
{
    
    console.log("HEllo "+person.name + " has no "+ person.phone);
}

var p1 = {name : 'shalini',phone :324729};
displaydetails(p1);
displaydetails({name :'navin'});
