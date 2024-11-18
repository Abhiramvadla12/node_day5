let arr = [{
    "age" : 20,
    "name":"abhiram"
},
{ 
    "age":19,
    "name":"jhon wick"
},
{
    "age":20,
    "name":"thomas shelby(peaky blinders)",
},
{
    "age":20,
    "name":"Aizen(bleach)"
},
{
    "age":1,
    "name":"baby"
}
]
output = [];
for(i of arr){
    if(i.age>18){
        output.push(i.name);
    }
}
console.log(output);