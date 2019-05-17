function display(name:string):string
{
    return "Welcome "+name;
}
console.log(display('Shalini'));
function show():void{
   // return "hello";
}

//optional arguments
// required
//n3 -> optional
function add(n1:number,n2:number,n3?:number)
{
    if(n3 === undefined)
    {
        console.log(n1+n2);
    }
    else
        console.log(n1+n2+n3);
}
add(1,2);
add(1,2,3);

//default arguments
function message(food:string, drinks:string = 'pepsi')
{
    console.log(`Have this tasty ${food} along with ${drinks}`);
}
message('pizza');
message('noodles','lemonade');

//rest parameters
function greet(company, ...names)
{
    console.log(names.length);
    console.log(`${company} welcomes you ${names[0]}`);
}

greet('Techgatha');
greet('Telusko','shalini','navin','riya');

