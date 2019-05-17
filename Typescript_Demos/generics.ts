function reverse<T>(items:T[])
{
    var revnos = [];
    for (var i = items.length-1 ; i>=0 ;i--)
    {
        revnos.push(items[i]);
    }
    return revnos;
}
var sample = [ 1,2,3,4,5];
var reversenos = reverse(sample);
console.log(reversenos);
var names =["shalini","navin","vihaan"];
var revnames = reverse(names);
console.log(revnames);