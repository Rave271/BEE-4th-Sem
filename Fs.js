const fs=require('fs');

let data=fs.readFileSync('fs.txt','utf-8');
console.log(data);


let obj={
    "name":"RaUlGhul",
    "age":22
};

// console.log(typeof(obj));
let jsonstr=JSON.stringify(obj);
console.log(typeof(jsonstr));