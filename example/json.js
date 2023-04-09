const fs = require('fs')

const obj = {
    name : "Jetha",
    age:24,
    from:'nepal'
}

const jsonData = JSON.stringify(obj);
// console.log(jsonData)
// const objData = JSON.parse(jsonData);
// console.log(objData.name);

//write json data to file
// fs.writeFile('file.json',jsonData,(err)=> 
//     { 
//     console.log(err);
//     });

//read file
// fs.readFile("file.json",'utf-8',(  err,data) =>{
//     console.log(data);
// })

const objData = JSON.parse(jsonData);
console.log(objData);
