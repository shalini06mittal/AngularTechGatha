var nos = [1,2,3,4,5,6,100];
for(var i =0; i< nos.length;i++)
{
    console.log(nos[i]);
}
for(var j in nos)
{
    console.log(j+" : "+nos[j]);
}

//typescript -> for -of
console.log("Typescript for of");
for(var n of nos)
{
    console.log(n);
}